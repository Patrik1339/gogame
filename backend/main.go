package main

import (
	"embed"
	"fmt"
	"log"
	"os"

	"github.com/Patrik1339/GoGame/controller"
	"github.com/Patrik1339/GoGame/repository"
	"github.com/Patrik1339/GoGame/server"
	"github.com/Patrik1339/GoGame/service"
	"github.com/golang-migrate/migrate/v4"
	"github.com/golang-migrate/migrate/v4/database/postgres"
	"github.com/golang-migrate/migrate/v4/source/iofs"
	"github.com/joho/godotenv"
	gorm_postgres "gorm.io/driver/postgres"
	"gorm.io/gorm"
)

//go:embed db/migration
var migrationFiles embed.FS

func main() {
	loadEnv()

	db := initDB()

	runMigrations(db)

	serverPort := os.Getenv("SERVER_PORT")
	if serverPort == "" {
		serverPort = "8080"
	}
	serverAddr := fmt.Sprintf(":%s", serverPort)

	gameServer := buildServer(serverAddr, db)

	if err := gameServer.Start(); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
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

func buildServer(serverAddr string, db *gorm.DB) *server.Server {
	playerRepo := repository.NewPlayerRepository(db)
	gameRepo := repository.NewGameRepository(db)

	playerService := service.NewPlayerService(playerRepo)
	authService := service.NewAuthService(playerService)
	gameService := service.NewGameService(gameRepo)

	authController := controller.NewAuthController(authService)

	return server.NewServer(serverAddr, authController, playerService, gameService)
}
