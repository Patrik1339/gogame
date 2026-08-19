package service

import "github.com/Patrik1339/GoGame/repository"

type GameService struct {
	gameRepository *repository.GameRepository
}

func NewGameService(gameRepository *repository.GameRepository) *GameService {
	return &GameService{
		gameRepository: gameRepository,
	}
}
