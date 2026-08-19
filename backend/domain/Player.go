package domain

type Player struct {
	ID       int64
	Username string
	Password string
}

func NewPlayer(username string, password string) *Player {
	return &Player{
		Username: username,
		Password: password,
	}
}
