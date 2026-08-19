package domain

import "errors"

type GameLobby struct {
	ID         string
	Host       *Player
	Players    []*Player
	MaxPlayers int
}

func NewGameLobby(id string, host *Player, maxPlayers int) *GameLobby {
	return &GameLobby{
		ID:         id,
		Host:       host,
		Players:    make([]*Player, 0),
		MaxPlayers: maxPlayers,
	}
}

var (
	ErrLobbyFull     = errors.New("Lobby is full")
	ErrPlayerInLobby = errors.New("Player is already in the lobby")
)

func (l *GameLobby) AddPlayer(player *Player) error {
	if len(l.Players) >= l.MaxPlayers {
		return ErrLobbyFull
	}

	for _, p := range l.Players {
		if p.ID == player.ID {
			return ErrPlayerInLobby
		}
	}

	l.Players = append(l.Players, player)
	return nil
}

var ErrPlayerNotFound = errors.New("Player not found in GameLobby")

func (l *GameLobby) RemovePlayer(playerID int64) error {
	for i, p := range l.Players {
		if p.ID == playerID {
			copy(l.Players[i:], l.Players[i+1:])

			l.Players[len(l.Players)-1] = nil

			l.Players = l.Players[:len(l.Players)-1]

			return nil
		}
	}

	return ErrPlayerNotFound
}

func (l *GameLobby) GetPlayerCount() int {
	return len(l.Players)
}

func (l *GameLobby) IsFull() bool {
	return len(l.Players) >= l.MaxPlayers
}
