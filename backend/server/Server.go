package server

import (
	"encoding/json"
	"log"
	"net/http"
	"sync"

	"github.com/Patrik1339/GoGame/controller"
	"github.com/Patrik1339/GoGame/domain"
	"github.com/Patrik1339/GoGame/dtos"
	"github.com/Patrik1339/GoGame/service"
	"github.com/Patrik1339/GoGame/utils"
	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/proto"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin:     func(r *http.Request) bool { return true },
}

type Client struct {
	Player  *domain.Player
	Conn    *websocket.Conn
	writeMu sync.Mutex
}

func (c *Client) writeMessage(msgType int, data []byte) error {
	c.writeMu.Lock()
	defer c.writeMu.Unlock()
	return c.Conn.WriteMessage(msgType, data)
}

type ClientRequest struct {
	Client  *Client
	Request *dtos.Message
}

type Server struct {
	addr          string
	mux           *http.ServeMux
	authCtrl      *controller.AuthController
	playerService *service.PlayerService
	gameService   *service.GameService
	lobbyService  *service.LobbyService

	registerChan   chan *Client
	unregisterChan chan int64

	requestChan chan ClientRequest

	clients     sync.Map
	gameLobbies sync.Map
}

func NewServer(addr string, authCtrl *controller.AuthController, playerService *service.PlayerService, gameService *service.GameService, lobbyService *service.LobbyService) *Server {
	s := &Server{
		addr:          addr,
		mux:           http.NewServeMux(),
		authCtrl:      authCtrl,
		playerService: playerService,
		gameService:   gameService,
		lobbyService:  lobbyService,

		registerChan:   make(chan *Client),
		unregisterChan: make(chan int64),
		requestChan:    make(chan ClientRequest),
	}

	s.setupRoutes()
	return s
}

func (s *Server) setupRoutes() {
	s.mux.HandleFunc("/gogame/me", s.authCtrl.MeHandler)
	s.mux.HandleFunc("/gogame/login", s.authCtrl.LoginHandler)
	s.mux.HandleFunc("/gogame/register", s.authCtrl.RegisterHandler)

	s.mux.HandleFunc("/ws", s.handleWebSocket)
}

func (s *Server) RunHub() {
	log.Println("WebSocket Hub started...")

	for {
		select {
		case client := <-s.registerChan:
			s.handleRegister(client)

		case playerId := <-s.unregisterChan:
			s.handleUnregister(playerId)

		case request := <-s.requestChan:
			s.handleRequest(request)

		case redisPayload := <-s.lobbyService.RedisMessages:
			s.handleRedisMessage(redisPayload)
		}
	}
}

func (s *Server) sendResponse(client *Client, response dtos.Response) {
	responseJson, err := json.Marshal(response)
	if err != nil {
		log.Printf("An error occurred while converting response to json: %v", err)
		return
	}

	if err := client.writeMessage(websocket.TextMessage, responseJson); err != nil {
		log.Printf("An error occurred while sending response to Player with id %d: %v", client.Player.ID, err)
	}
}

func (s *Server) broadcastMessage(message []byte) {
	s.clients.Range(func(key, value any) bool {
		client, ok := value.(*Client)
		if !ok {
			return true
		}

		if err := client.writeMessage(websocket.BinaryMessage, message); err != nil {
			log.Printf("An error occurred while sending message to Player with id %d: %v", client.Player.ID, err)
		}

		return true
	})
}

func (s *Server) handleRequest(request ClientRequest) {
	switch request.Request.Type {

	case dtos.MessageType_GET_GAME_LOBBIES:
		s.handleGetGameLobbies(request)

	case dtos.MessageType_CREATE_LOBBY:
		payload := request.Request.GetCreateLobby()
		s.handleCreateLobby(request.Client, payload)

	case dtos.MessageType_JOIN_LOBBY:
		payload := request.Request.GetJoinLobby()
		s.handleJoinLobby(request.Client, payload)

	case dtos.MessageType_START_GAME:
		payload := request.Request.GetStartGame()
		s.handleStartGame(request.Client, payload)

	default:
		log.Printf("Unknown request type received from Player with ID %d: %v",
			request.Client.Player.ID, request.Request.Type)
	}
}

func (s *Server) handleRegister(client *Client) {
	s.clients.Store(client.Player.ID, client)
	log.Printf("Player %s (ID: %d) connected", client.Player.Username, client.Player.ID)
}

func (s *Server) handleUnregister(playerId int64) {
	if value, loaded := s.clients.LoadAndDelete(playerId); loaded {
		if client, ok := value.(*Client); ok {
			client.Conn.Close()
			log.Printf("Player %d disconnected", playerId)
		}
	}
}

func (s *Server) handleCreateLobby(client *Client, payload *dtos.CreateLobbyPayload) {
	maxPlayers := int(payload.MaxPlayers)

	if maxPlayers < 2 {
		s.sendResponse(client, dtos.NewResponse(dtos.Error, dtos.ErrorPayload{Message: "MaxPlayers must be >= 2"}))
		return
	}

	lobbyID := utils.GenerateLobbyID()
	for {
		if _, exists := s.gameLobbies.Load(lobbyID); !exists {
			break
		}
		lobbyID = utils.GenerateLobbyID()
	}

	lobby := domain.NewGameLobby(lobbyID, client.Player, maxPlayers)
	_ = lobby.AddPlayer(client.Player)

	s.gameLobbies.Store(lobbyID, lobby)
	log.Printf("New GameLobby with id %s created by %s (MaxPlayers: %d)", lobbyID, client.Player.Username, maxPlayers)

	s.sendResponse(client, dtos.NewResponse(dtos.Ok, dtos.LobbyCreatedPayload{LobbyID: lobbyID}))

	broadcastResp := dtos.NewResponse(dtos.NewLobbyAvailable, map[string]any{
		"lobby_id":      lobbyID,
		"max_players":   maxPlayers,
		"host_username": client.Player.Username,
	})

	messageJSON, _ := json.Marshal(broadcastResp)

	_ = s.lobbyService.PublishLobbyUpdate(string(messageJSON))
}

func (s *Server) handleJoinLobby(client *Client, payload *dtos.JoinLobbyPayload) {
	lobbyID := payload.LobbyId

	clientVal, exists := s.clients.Load(client.Player.ID)
	if !exists {
		log.Printf("Player with id %d not found", client.Player.ID)
		s.sendResponse(client, dtos.NewResponse(dtos.Error, dtos.ErrorPayload{Message: "Player not found"}))
		return
	}

	player, ok := clientVal.(*Client)
	if !ok {
		return
	}

	lobbyVal, exists := s.gameLobbies.Load(lobbyID)
	if !exists {
		log.Printf("GameLobby with id %s doesn't exist", lobbyID)
		s.sendResponse(client, dtos.NewResponse(dtos.Error, dtos.ErrorPayload{Message: "Lobby not found"}))
		return
	}

	gameLobby, ok := lobbyVal.(*domain.GameLobby)
	if !ok {
		return
	}

	err := gameLobby.AddPlayer(player.Player)
	if err != nil {
		log.Printf("Could not add Player %d to GameLobby %s: %v", client.Player.ID, lobbyID, err)
		s.sendResponse(client, dtos.NewResponse(dtos.Error, dtos.ErrorPayload{Message: err.Error()}))
		return
	}

	s.sendResponse(client, dtos.NewResponse(dtos.Ok, dtos.LobbyJoinedPayload{LobbyID: lobbyID}))

	joinedLobbyDto := s.buildGameLobbyDTO(gameLobby)
	updateNotif := dtos.NewResponse(dtos.PlayerJoinedLobby, joinedLobbyDto)

	updateNotifJSON, _ := json.Marshal(updateNotif)

	_ = s.lobbyService.PublishLobbyUpdate(string(updateNotifJSON))
}

func (s *Server) buildGameLobbyDTO(gl *domain.GameLobby) dtos.GameLobbyDTO {
	playerNames := make([]string, 0)
	for _, p := range gl.Players {
		playerNames = append(playerNames, p.Username)
	}
	return dtos.NewGameLobbyDTO(
		gl.ID,
		gl.Host.Username,
		len(gl.Players),
		gl.MaxPlayers,
		playerNames,
	)
}

func (s *Server) handleRedisMessage(payload []byte) {
	var message dtos.Message

	err := proto.Unmarshal(payload, &message)
	if err != nil {
		log.Printf("An error occurred while decoding redis message using protobuf: %v", err)
		return
	}

	switch message.Type {

	case dtos.MessageType_NEW_LOBBY_AVAILABLE:
		lobbyData := message.GetNewLobbyAvailable()

		if _, exists := s.gameLobbies.Load(lobbyData.LobbyId); !exists {
			player, err := s.playerService.FindPlayerById(lobbyData.HostId)

			if err != nil {
				log.Printf("An error occurred while searching for player with id: %d", lobbyData.HostId)
				return
			}

			newLobby := domain.NewGameLobby(lobbyData.LobbyId, player, int(lobbyData.MaxPlayers))
			s.gameLobbies.Store(lobbyData.LobbyId, newLobby)
		}

		s.broadcastMessage(payload)

	case dtos.MessageType_PLAYER_JOINED_LOBBY:
		joinData := message.GetPlayerJoined()

		lobbyVal, exists := s.gameLobbies.Load(joinData.LobbyId)
		if !exists {
			log.Printf("No lobby found with id: %s", joinData.LobbyId)
			return
		}

		gameLobby, ok := lobbyVal.(*domain.GameLobby)
		if !ok {
			log.Printf("Critical error: Object from map is not a *domain.GameLobby")
			return
		}

		player := &domain.Player{
			ID:       joinData.PlayerId,
			Username: joinData.PlayerUsername,
		}

		_ = gameLobby.AddPlayer(player)

		s.broadcastMessage(payload)

	case dtos.MessageType_START_GAME:
		startData := message.GetStartGame()

		lobbyVal, exists := s.gameLobbies.Load(startData.LobbyId)
		if !exists {
			log.Printf("No lobby found with id: %s", startData.LobbyId)
			return
		}

		gameLobby, ok := lobbyVal.(*domain.GameLobby)
		if !ok {
			log.Printf("Critical error: Object from map is not a *domain.GameLobby")
			return
		}

		gameLobby.Start()

		s.broadcastMessage(payload)

	default:
		log.Printf("Unknown redis message: %v", message.Type)
	}
}

func (s *Server) broadcastToLobby(message []byte, lobby *domain.GameLobby) {
	s.clients.Range(func(key, value any) bool {
		client, ok := value.(*Client)
		if !ok {
			return true
		}

		for _, p := range lobby.Players {
			if client.Player.ID == p.ID {
				if err := client.writeMessage(websocket.TextMessage, message); err != nil {
					log.Printf("An error occurred while sending message to Player with id %d: %v", client.Player.ID, err)
				}
				break
			}
		}
		return true
	})
}

func (s *Server) handleStartGame(client *Client, payload *dtos.StartGamePayload) {
	lobbyID := payload.LobbyId

	lobbyVal, exists := s.gameLobbies.Load(lobbyID)
	if !exists {
		s.sendResponse(client, dtos.NewResponse(dtos.Error, dtos.ErrorPayload{Message: "Lobby not found"}))
		return
	}
	gameLobby, ok := lobbyVal.(*domain.GameLobby)
	if !ok {
		return
	}

	if gameLobby.Host.ID != client.Player.ID {
		s.sendResponse(client, dtos.NewResponse(dtos.Error, dtos.ErrorPayload{Message: "Only host can start the game"}))
		return
	}

	if len(gameLobby.Players) < 2 {
		s.sendResponse(client, dtos.NewResponse(dtos.Error, dtos.ErrorPayload{Message: "Not enough players to start"}))
		return
	}

	gameID := utils.GenerateLobbyID() // Temporary Game ID

	notif := dtos.NewResponse(dtos.GameStarted, dtos.GameStartedPayload{GameID: gameID})
	notifMsg, _ := json.Marshal(notif)

	s.broadcastToLobby(notifMsg, gameLobby)
}

func (s *Server) handleGetGameLobbies(request ClientRequest) {
	gameLobbyDtos := make([]dtos.GameLobbyDTO, 0)

	s.gameLobbies.Range(func(key, value any) bool {
		if gameLobby, ok := value.(*domain.GameLobby); ok {
			gameLobbyDtos = append(gameLobbyDtos, s.buildGameLobbyDTO(gameLobby))
		}
		return true
	})

	response := dtos.NewResponse(dtos.Ok, dtos.GetGameLobbiesPayload{GameLobbyDTOs: gameLobbyDtos})
	s.sendResponse(request.Client, response)
}

func (s *Server) handleWebSocket(w http.ResponseWriter, r *http.Request) {
	cookie, err := r.Cookie("jwt_token")
	if err != nil {
		log.Printf("Missing JWT cookie: %v", err)
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	claims, err := utils.ValidateToken(cookie.Value)
	if err != nil {
		log.Printf("Invalid JWT: %v", err)
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	player, err := s.playerService.FindPlayerByUsername(claims.Username)
	if player == nil || err != nil {
		log.Printf("Player not found: %v", err)
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Printf("An error occurred while upgrading to WebSocket: %v", err)
		return
	}

	client := &Client{
		Player: player,
		Conn:   conn,
	}

	s.registerChan <- client

	go s.listenToPlayer(client)
}

func (s *Server) listenToPlayer(client *Client) {
	defer func() {
		s.unregisterChan <- client.Player.ID
	}()

	for {
		messageType, bazeBinare, err := client.Conn.ReadMessage()
		if err != nil {
			log.Printf("Connection closed for Player with id %d: %v", client.Player.ID, err)
			break
		}

		if messageType != websocket.BinaryMessage {
			log.Printf("Ignored non-binary message from Player %d", client.Player.ID)
			continue
		}

		var req dtos.Message
		err = proto.Unmarshal(bazeBinare, &req)
		if err != nil {
			log.Printf("Failed to unmarshal protobuf from Player %d: %v", client.Player.ID, err)
			continue
		}

		s.requestChan <- ClientRequest{
			Client:  client,
			Request: &req,
		}
	}
}

func (s *Server) Start() error {
	go s.RunHub()
	log.Printf("HTTP server started on port: %s", s.addr)

	corsMiddleware := func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			origin := r.Header.Get("Origin")
			if origin != "" {
				w.Header().Set("Access-Control-Allow-Origin", origin)
				w.Header().Set("Access-Control-Allow-Credentials", "true")
				w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
				w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
			}

			if r.Method == "OPTIONS" {
				w.WriteHeader(http.StatusNoContent)
				return
			}
			next.ServeHTTP(w, r)
		})
	}

	return http.ListenAndServe(s.addr, corsMiddleware(s.mux))
}
