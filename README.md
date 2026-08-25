# GoGame

GoGame is a distributed multiplayer game application built with a Go backend (WebSockets, Redis Pub/Sub, PostgreSQL) and a React (Vite) frontend.

## Configuration (.env)

The application relies on a `.env` file located in the `backend/` directory (`backend/.env`). 

### Key Variables:
- `SERVERS_COUNT`: The number of backend servers and frontend clients to spin up when testing locally.
- `SERVERS_STARTING_PORT`: The starting port for the backend servers (e.g., `8080`). If `SERVERS_COUNT` is 4, backend servers will start on `8080, 8081, 8082, 8083`.
- Database & Redis Configs (`DB_HOST`, `REDIS_HOST`, `DB_PORT`, etc.)

## How to run WITH Docker

To run the entire stack (PostgreSQL, Redis, multiple Backends, and multiple Frontends) completely inside Docker:

```bash
docker compose up --build
```
This reads the `docker-compose.yaml` file, which has everything pre-configured.

## How to run WITHOUT Docker (Local Development)

If you want to run the Go backend and React frontend locally on your machine for easier debugging, you still need PostgreSQL and Redis running.

1. **Start dependencies (Redis & Postgres) in Docker:**
   ```bash
   docker compose up -d redis postgres
   ```

2. **Start the Backend:**
   Open a terminal in the `backend/` directory:
   ```bash
   cd backend
   go run .
   ```
   *This will automatically launch the number of servers defined in your `.env` file on consecutive ports.*

3. **Start the Frontend Clients:**
   Open another terminal in the `frontend/` directory:
   ```bash
   cd frontend
   npm install
   npm run clients
   ```
   *This will dynamically read the backend `.env` file and spawn consecutive Vite dev servers (on ports 3000, 3001, etc.), properly connected to their respective backend instances.*
