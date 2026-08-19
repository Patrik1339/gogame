package repository

import (
	"github.com/Patrik1339/GoGame/domain"
	"gorm.io/gorm"
)

type GameRepository struct {
	db *gorm.DB
}

func NewGameRepository(db *gorm.DB) *GameRepository {
	return &GameRepository{
		db: db,
	}
}

func (r *GameRepository) GetGamesForPlayer(player *domain.Player) ([]*domain.Game, error) {
	var games []*domain.Game

	err := r.db.Model(&domain.Game{}).
		Joins("JOIN scores ON scores.game_id = games.id").
		Joins("JOIN players ON players.id = scores.player_id").
		Where("scores.player_id = ?", player.ID).
		Find(&games).Error
	if err != nil {
		return nil, err
	}

	return games, nil
}
