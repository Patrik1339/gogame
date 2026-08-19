package domain

type Score struct {
	Game   *Game
	Player *Player
	Points int
}

func NewScore(game *Game, player *Player, points int) *Score {
	return &Score{
		Game:   game,
		Player: player,
		Points: points,
	}
}
