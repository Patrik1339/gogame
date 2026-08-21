package service

import (
	"context"
	"log"

	"github.com/redis/go-redis/v9"
)

const lobbyChannel = "global_lobbies"

type LobbyService struct {
	redisClient   *redis.Client
	ctx           context.Context
	RedisMessages chan []byte
}

func NewLobbyService(redisClient *redis.Client) *LobbyService {
	ls := &LobbyService{
		redisClient:   redisClient,
		ctx:           context.Background(),
		RedisMessages: make(chan []byte, 100),
	}

	ls.startListening()
	return ls
}

func (ls *LobbyService) startListening() {
	pubsub := ls.redisClient.Subscribe(ls.ctx, lobbyChannel)

	go func() {
		redisChan := pubsub.Channel()

		for msg := range redisChan {
			ls.RedisMessages <- []byte(msg.Payload)
		}
	}()
}

func (ls *LobbyService) PublishLobbyUpdate(lobbyDataJSON string) error {
	err := ls.redisClient.Publish(ls.ctx, lobbyChannel, lobbyDataJSON).Err()
	if err != nil {
		log.Printf("LobbyService: An error occurred while publishing to redis: %v", err)
		return err
	}

	log.Println("LobbyService: Message sent succesfully!")
	return nil
}
