package service

import (
	"errors"

	"github.com/Patrik1339/GoGame/domain"
	"github.com/Patrik1339/GoGame/repository"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type PlayerService struct {
	playerRepository *repository.PlayerRepository
}

func NewPlayerService(playerRepository *repository.PlayerRepository) *PlayerService {
	return &PlayerService{
		playerRepository: playerRepository,
	}
}

func (s *PlayerService) Save(username string, password string) (*domain.Player, error) {
	player, err := s.playerRepository.FindPlayerByUsername(username)

	if err == nil && player != nil {
		return nil, errors.New("username already exists")
	}

	if err != nil && !errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, err
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return nil, err
	}

	newPlayer := &domain.Player{
		Username: username,
		Password: string(hashedPassword),
	}
	return s.playerRepository.Save(newPlayer)
}

func (s *PlayerService) FindPlayerById(playerId int64) (*domain.Player, error) {
	return s.playerRepository.FindPlayerById(playerId)
}

func (s *PlayerService) FindPlayerByUsername(username string) (*domain.Player, error) {
	return s.playerRepository.FindPlayerByUsername(username)
}
