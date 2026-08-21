package main

import (
	"context"
	"embed"
	"fmt"
	"log"
	"os"
	"sync"

	"github.com/Patrik1339/GoGame/controller"
	"github.com/Patrik1339/GoGame/repository"
	"github.com/Patrik1339/GoGame/server"
	"github.com/Patrik1339/GoGame/service"
	"github.com/golang-migrate/migrate/v4"
	"github.com/golang-migrate/migrate/v4/database/postgres"
	"github.com/golang-migrate/migrate/v4/source/iofs"
	"github.com/joho/godotenv"
	"github.com/redis/go-redis/v9"
	gorm_postgres "gorm.io/driver/postgres"
	"gorm.io/gorm"
)

//go:embed db/migration
var migrationFiles embed.FS

func main() {
	loadEnv()
	db := initDB()
	runMigrations(db)

	redisClient := initRedis()

	ports := []string{"8080", "8081"}

	var wg sync.WaitGroup

	for _, port := range ports {
		wg.Add(1)

		serverAddr := fmt.Sprintf(":%s", port)

		go func(addr string) {
			defer wg.Done()

			gameServer := buildServer(addr, db, redisClient)

			log.Printf("Starting server on port %s...", addr)

			if err := gameServer.Start(); err != nil {
				log.Fatalf("Server on %s failed to start: %v", addr, err)
			}
		}(serverAddr)
	}

	log.Println("All servers are running.")
	wg.Wait()
}

func loadEnv() {
	if err := godotenv.Load(); err != nil {
		log.Println("Warning: Could not load .env file (system variables will be used)")
	}
}

func initDB() *gorm.DB {
	connStr := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		os.Getenv("DB_HOST"), os.Getenv("DB_USER"), os.Getenv("DB_PASS"),
		os.Getenv("DB_NAME"), os.Getenv("DB_PORT"))

	db, err := gorm.Open(gorm_postgres.Open(connStr), &gorm.Config{})
	if err != nil {
		log.Fatalf("Error connecting to the database: %v", err)
	}

	log.Println("Database connection successfully established!")
	return db
}

func runMigrations(db *gorm.DB) {
	sqlDB, err := db.DB()
	if err != nil {
		log.Fatalf("Error retrieving sql.DB instance: %v", err)
	}

	driver, err := postgres.WithInstance(sqlDB, &postgres.Config{})
	if err != nil {
		log.Fatalf("Error creating migration driver: %v", err)
	}

	sourceDriver, err := iofs.New(migrationFiles, "db/migration")
	if err != nil {
		log.Fatalf("Error loading migration files: %v", err)
	}

	m, err := migrate.NewWithInstance("iofs", sourceDriver, "postgres", driver)
	if err != nil {
		log.Fatalf("Error initializing migrations: %v", err)
	}

	if err := m.Up(); err != nil && err != migrate.ErrNoChange {
		log.Fatalf("Error running migrations: %v", err)
	}

	log.Println("The migrations were successfully run!")
}

func initRedis() *redis.Client {
	redisAddr := fmt.Sprintf("%s:%s", os.Getenv("REDIS_HOST"), os.Getenv("REDIS_PORT"))

	rdb := redis.NewClient(&redis.Options{
		Addr:     redisAddr,
		Password: os.Getenv("REDIS_PASSWORD"),
		DB:       0,
	})

	if _, err := rdb.Ping(context.Background()).Result(); err != nil {
		log.Fatalf("Error connecting to Redis: %v", err)
	}

	log.Println("Redis connection successfully established!")
	return rdb
}

func buildServer(serverAddr string, db *gorm.DB, redisClient *redis.Client) *server.Server {
	playerRepo := repository.NewPlayerRepository(db)
	gameRepo := repository.NewGameRepository(db)

	playerService := service.NewPlayerService(playerRepo)
	authService := service.NewAuthService(playerService)
	gameService := service.NewGameService(gameRepo)

	lobbyService := service.NewLobbyService(redisClient)

	authController := controller.NewAuthController(authService)

	return server.NewServer(serverAddr, authController, playerService, gameService, lobbyService)
}
