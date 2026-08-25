package controller

import (
	"encoding/json"
	"log"
	"net/http"
	"time"

	"github.com/Patrik1339/GoGame/dtos"
	"github.com/Patrik1339/GoGame/service"
	"github.com/Patrik1339/GoGame/utils"
)

type AuthController struct {
	authService *service.AuthService
}

func NewAuthController(authService *service.AuthService) *AuthController {
	return &AuthController{
		authService: authService,
	}
}

func (c *AuthController) LoginHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("Received Login request")
	var loginRequest dtos.LoginRequest

	err := json.NewDecoder(r.Body).Decode(&loginRequest)
	if err != nil {
		log.Printf("Invalid request: %v", err)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]interface{}{"error": "Invalid JSON"})
		return
	}

	player, err := c.authService.Login(loginRequest.Username, loginRequest.Password)
	if err != nil {
		log.Printf("Login failed for user %s: %v", loginRequest.Username, err)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(map[string]interface{}{"error": "Invalid username or password"})
		return
	}

	token, err := utils.GenerateToken(player.ID, player.Username)
	if err != nil {
		log.Printf("Failed to generate token: %v", err)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(map[string]interface{}{"error": "Internal Server Error"})
		return
	}

	http.SetCookie(w, &http.Cookie{
		Name:     "jwt_token",
		Value:    token,
		Expires:  time.Now().Add(24 * time.Hour),
		HttpOnly: true,
		Secure:   false,
		Path:     "/",
	})

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	json.NewEncoder(w).Encode(map[string]interface{}{
		"message":   "Login successful",
		"player_id": player.ID,
		"username":  player.Username,
	})
}

func (c *AuthController) MeHandler(w http.ResponseWriter, r *http.Request) {
	cookie, err := r.Cookie("jwt_token")
	if err != nil {
		http.Error(w, "Not logged in", http.StatusUnauthorized)
		return
	}

	claims, err := utils.ValidateToken(cookie.Value)
	if err != nil {
		http.Error(w, "Invalid session", http.StatusUnauthorized)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]interface{}{
		"player_id": claims.PlayerID,
		"username":  claims.Username,
	})
}

func (c *AuthController) LogoutHandler(w http.ResponseWriter, r *http.Request) {
	http.SetCookie(w, &http.Cookie{
		Name:     "jwt_token",
		Value:    "",
		Expires:  time.Now().Add(-1 * time.Hour),
		HttpOnly: true,
		Secure:   false,
		Path:     "/",
	})
	
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]interface{}{"message": "Logged out successfully"})
}

func (c *AuthController) RegisterHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("Received Register request")
	var registerRequest dtos.RegisterRequest

	err := json.NewDecoder(r.Body).Decode(&registerRequest)
	if err != nil {
		log.Printf("Invalid request: %v", err)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]interface{}{"error": "Invalid JSON"})
		return
	}

	player, err := c.authService.Register(registerRequest.Username, registerRequest.Password)
	if err != nil {
		log.Printf("Registration failed for user %s: %v", registerRequest.Username, err)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]interface{}{"error": "Could not register player"})
		return
	}

	w.WriteHeader(http.StatusCreated)

	json.NewEncoder(w).Encode(map[string]interface{}{
		"message":   "Registered successfully",
		"player_id": player.ID,
		"username":  player.Username,
	})
}
