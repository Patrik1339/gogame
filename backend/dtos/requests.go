package dtos

import "encoding/json"

type RegisterRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type LoginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type WsRequestType string

const (
	GetGameHistory WsRequestType = "GET_GAME_HISTORY"
	GetGameLobbies WsRequestType = "GET_GAME_LOBBIES"
	CreateLobby    WsRequestType = "CREATE_LOBBY"
	JoinLobby      WsRequestType = "JOIN_LOBBY"
	StartGame      WsRequestType = "START_GAME"
)

type WsRequest struct {
	Type    WsRequestType   `json:"type"`
	Payload json.RawMessage `json:"payload"`
}

type CreateLobbyPayload struct {
	MaxPlayers int `json:"max_players"`
}

type JoinLobbyPayload struct {
	LobbyID string `json:"lobby_id"`
}

type StartGamePayload struct {
	LobbyID string `json:"lobby_id"`
}

type GetGameHistoryPayload struct {
	PlayerID int64 `json:"player_id"`
}

