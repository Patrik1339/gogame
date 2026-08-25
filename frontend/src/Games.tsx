import { useState } from "react"
import { dtos } from "./proto/messages"

export interface GameLobby {
    id: string;
    host_username: string;
    player_count: number;
    max_players: number;
    players?: string[];
}

interface GamesProps {
    ws: WebSocket | null;
    lobbies: GameLobby[];
}

export default function Games({ ws, lobbies }: GamesProps) {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [newLobbyMaxPlayers, setNewLobbyMaxPlayers] = useState(4);

    const handleCreateLobby = (e: React.FormEvent) => {
        e.preventDefault();
        if (ws && ws.readyState === WebSocket.OPEN) {
            const msg = dtos.Message.create({
                type: dtos.MessageType.CREATE_LOBBY,
                createLobby: { maxPlayers: newLobbyMaxPlayers }
            });
            ws.send(new Uint8Array(dtos.Message.encode(msg).finish()));
            setIsCreateModalOpen(false);
        }
    };

    const handleJoinLobby = (lobbyId: string) => {
        if (ws && ws.readyState === WebSocket.OPEN) {
            const msg = dtos.Message.create({
                type: dtos.MessageType.JOIN_LOBBY,
                joinLobby: { lobbyId: lobbyId }
            });
            ws.send(new Uint8Array(dtos.Message.encode(msg).finish()));
        }
    };

    return (
        <div>
            <h2>Active Lobbies</h2>
            <button onClick={() => setIsCreateModalOpen(true)} style={{ marginBottom: '15px' }}>
                + Create New Lobby
            </button>

            {isCreateModalOpen && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', zIndex: 1000
                }}>
                    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', width: '300px', color: 'black' }}>
                        <h3 style={{ marginTop: 0 }}>Create New Lobby</h3>
                        <form onSubmit={handleCreateLobby}>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Max Player Count:</label>
                                <input 
                                    type="number" 
                                    min="2"
                                    max="10"
                                    value={newLobbyMaxPlayers} 
                                    onChange={(e) => setNewLobbyMaxPlayers(parseInt(e.target.value) || 2)}
                                    style={{ width: '100%', padding: '5px', boxSizing: 'border-box' }}
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                                <button type="button" onClick={() => setIsCreateModalOpen(false)}>Cancel</button>
                                <button type="submit">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            
            <table border={1} cellPadding={8} style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th>Lobby ID</th>
                        <th>Host</th>
                        <th>Players</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {lobbies.length === 0 ? (
                        <tr>
                            <td colSpan={4} style={{ textAlign: 'center' }}>No active lobbies</td>
                        </tr>
                    ) : (
                        lobbies.map(lobby => (
                            <tr key={lobby.id}>
                                <td>{lobby.id}</td>
                                <td>{lobby.host_username}</td>
                                <td>{lobby.player_count} / {lobby.max_players}</td>
                                <td>
                                    <button 
                                        onClick={() => handleJoinLobby(lobby.id)}
                                        disabled={lobby.player_count >= lobby.max_players}
                                    >
                                        Join
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}