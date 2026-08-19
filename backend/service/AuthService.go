package service

import (
	"github.com/Patrik1339/GoGame/domain"
	"golang.org/x/crypto/bcrypt"
)

type AuthService struct {
	playerService *PlayerService
}

func NewAuthService(playerService *PlayerService) *AuthService {
	return &AuthService{
		playerService: playerService,
	}
}

func (s *AuthService) Register(username string, password string) (*domain.Player, error) {
	player, err := s.playerService.Save(username, password)
	if err != nil {
		return nil, err
	}

	return player, nil
}

func (s *AuthService) Login(username string, password string) (*domain.Player, error) {
	player, err := s.playerService.FindPlayerByUsername(username)
	if err != nil {
		return nil, err
	}

	err = bcrypt.CompareHashAndPassword([]byte(player.Password), []byte(password))
	if err != nil {
		return nil, err
	}

	return player, nil
}
