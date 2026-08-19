package utils

import (
	"math/rand"
	"time"
)

func init() {
	rand.Seed(time.Now().UnixNano())
}

const charset = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"

func GenerateLobbyID() string {
	b := make([]byte, 5)
	for i := range b {
		b[i] = charset[rand.Intn(len(charset))]
	}
	return string(b)
}
