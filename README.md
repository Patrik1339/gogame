# Go Multiplayer Game Server

## 🚀 Current Features
- **User Authentication:** Secure Register and Login flow.
- **Lobby System:** Players can seamlessly create and join Game Lobbies.

## 🧠 Architecture & Technical Specifications
- **Distributed & Scalable:** Supports multiple backend instances running concurrently. State synchronization across servers is handled perfectly via **Redis Pub/Sub**.
- **High Performance:** Replaced standard JSON with **Protocol Buffers (Protobuf)** for lightning-fast, strictly-typed binary serialization.
- **Real-Time Communication:** Persistent **WebSocket** connections power the gameplay and lobby events.
- **Hybrid Protocol:** Standard REST API handles the initial authentication (JWT), smoothly upgrading the HTTP connection to a WebSocket for the game session.

## 🛠️ Tech Stack
- **Backend:** Go (Golang), WebSockets, Protobuf
- **Frontend:** React, TypeScript, Vite
- **Infrastructure:** Docker, Docker Compose
- **Databases:** PostgreSQL (Persistent storage), Redis (Pub/Sub & Caching)

## 🐳 How to run locally

The entire architecture is containerized. You don't need to install Go, Node, or Postgres locally.

1. Clone the repository
2. Run the environment using Docker Compose:
   ```bash
   docker-compose up --build
