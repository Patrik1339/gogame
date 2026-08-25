import type { PlayerData } from "./App"
import type { GameLobby } from "./Games"
import { dtos } from "./proto/messages"

interface LobbyProps {
    ws: WebSocket | null;
    lobby: GameLobby;
    player: PlayerData;
}

export default function Lobby({ ws, lobby, player }: LobbyProps) {
    const isHost = player.username === lobby.host_username;
    const canStart = isHost && lobby.player_count >= 2;

    const handleStartGame = () => {
        if (ws && ws.readyState === WebSocket.OPEN) {
            const msg = dtos.Message.create({
                type: dtos.MessageType.START_GAME,
                startGame: { lobbyId: lobby.id }
            });
            ws.send(new Uint8Array(dtos.Message.encode(msg).finish()));
        }
    };

    return (
        <div>
            <h2>Lobby: {lobby.id}</h2>
            <p><strong>Host:</strong> {lobby.host_username}</p>
            <p><strong>Players ({lobby.player_count}/{lobby.max_players}):</strong></p>
            <ul>
                {lobby.players?.map((p, idx) => (
                    <li key={idx}>{p}</li>
                ))}
            </ul>

            {isHost && (
                <button 
                    onClick={handleStartGame}
                    disabled={!canStart}
                    style={{ 
                        marginTop: '20px', 
                        padding: '10px 20px', 
                        backgroundColor: canStart ? '#4CAF50' : '#ccc', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px', 
                        cursor: canStart ? 'pointer' : 'not-allowed' 
                    }}
                >
                    Start Game
                </button>
            )}
            {!isHost && (
                <p style={{ fontStyle: 'italic', color: '#666' }}>Waiting for host to start the game...</p>
            )}
        </div>
    )
}
