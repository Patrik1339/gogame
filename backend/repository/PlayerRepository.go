package repository

import (
	"github.com/Patrik1339/GoGame/domain"
	"gorm.io/gorm"
)

type PlayerRepository struct {
	db *gorm.DB
}

func NewPlayerRepository(db *gorm.DB) *PlayerRepository {
	return &PlayerRepository{
		db: db,
	}
}

func (r *PlayerRepository) Save(player *domain.Player) (*domain.Player, error) {
	err := r.db.Create(player).Error
	if err != nil {
		return nil, err
	}

	return player, nil
}

func (r *PlayerRepository) FindPlayerByUsername(username string) (*domain.Player, error) {
	var player domain.Player

	err := r.db.Where("username = ?", username).First(&player).Error
	if err != nil {
		return nil, err
	}

	return &player, nil
}
