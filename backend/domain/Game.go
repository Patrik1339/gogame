package domain

import (
	"github.com/google/uuid"
)

type Game struct {
	ID      uuid.UUID
	Players []*Player
	Scores  []*Score
}

func NewGame() *Game {
	return &Game{}
}

func (g *Game) AddPlayer(player *Player) {
	g.Players = append(g.Players, player)

	score := NewScore(g, player, 0)
	g.Scores = append(g.Scores, score)
}

func (g *Game) RemovePlayer(player *Player) {
	for i, p := range g.Players {
		if p == player {
			g.Players = append(g.Players[:i], g.Players[i+1:]...)
			g.Scores = append(g.Scores[:i], g.Scores[i+1:]...)
			break
		}
	}
}
