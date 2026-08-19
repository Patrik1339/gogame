package dtos

type GameLobbyDTO struct {
	Id           string   `json:"id"`
	HostUsername string   `json:"host_username"`
	PlayerCount  int      `json:"player_count"`
	MaxPlayers   int      `json:"max_players"`
	Players      []string `json:"players"`
}

func NewGameLobbyDTO(id string, hostUsername string, playerCount int, maxPlayers int, players []string) GameLobbyDTO {
	return GameLobbyDTO{
		Id:           id,
		HostUsername: hostUsername,
		PlayerCount:  playerCount,
		MaxPlayers:   maxPlayers,
		Players:      players,
	}
}
