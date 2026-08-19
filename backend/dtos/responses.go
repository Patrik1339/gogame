package dtos

type ResponseType string

const (
	Ok                ResponseType = "OK"
	Error             ResponseType = "ERROR"
	NewLobbyAvailable ResponseType = "NEW_LOBBY_AVAILABLE"
	PlayerJoinedLobby ResponseType = "PLAYER_JOINED_LOBBY"
	GameStarted       ResponseType = "GAME_STARTED"
)

type Response struct {
	Type    ResponseType `json:"type"`
	Payload any          `json:"payload,omitempty"`
}

func NewResponse(responseType ResponseType, payload any) Response {
	return Response{
		Type:    responseType,
		Payload: payload,
	}
}

type GetGameLobbiesPayload struct {
	GameLobbyDTOs []GameLobbyDTO
}

type LobbyCreatedPayload struct {
	LobbyID string `json:"lobby_id"`
}

type LobbyJoinedPayload struct {
	LobbyID string `json:"lobby_id"`
}

type GameStartedPayload struct {
	GameID string `json:"game_id"`
}

type ErrorPayload struct {
	Message string `json:"message"`
}
