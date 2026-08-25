import { useState, useEffect } from "react"
import { dtos } from "./proto/messages"
import PlayerProfile from "./PlayerProfile"
import Social from "./Social"
import Games from "./Games"
import type { GameLobby } from "./Games"
import Lobby from "./Lobby"
import type { PlayerData } from "./App"

interface MenuProps {
    player: PlayerData;
    onLogout: () => void;
}

export default function Menu({ player, onLogout }: MenuProps) {
    const [activeTab, setActiveTab] = useState<"profile" | "social" | "games" | "lobby">("profile");
    
    const [ws, setWs] = useState<WebSocket | null>(null);
    const [lobbies, setLobbies] = useState<GameLobby[]>([]);
    const [currentLobbyId, setCurrentLobbyId] = useState<string | null>(null);

    useEffect(() => {
        const socketUrl = import.meta.env.VITE_WS_URL || "ws://localhost:8080/ws";
        const socket = new WebSocket(socketUrl);

        socket.onopen = () => {
            console.log("WebSocket connected in Menu");
            const msg = dtos.Message.create({
                type: dtos.MessageType.GET_GAME_LOBBIES
            });
            socket.send(new Uint8Array(dtos.Message.encode(msg).finish()));
        };

        socket.onmessage = async (event) => {
            try {
                if (event.data instanceof Blob) {
                    const arrayBuffer = await event.data.arrayBuffer();
                    const message = dtos.Message.decode(new Uint8Array(arrayBuffer));
                    
                    if (message.type === dtos.MessageType.NEW_LOBBY_AVAILABLE) {
                        const msg = dtos.Message.create({
                            type: dtos.MessageType.GET_GAME_LOBBIES
                        });
                        socket.send(new Uint8Array(dtos.Message.encode(msg).finish()));
                    } else if (message.type === dtos.MessageType.PLAYER_JOINED_LOBBY) {
                        const joinData = message.playerJoined;
                        if (joinData && joinData.playerUsername) {
                            setLobbies(prevLobbies => prevLobbies.map(lobby => {
                                if (lobby.id === joinData.lobbyId) {
                                    if (lobby.players?.includes(joinData.playerUsername!)) {
                                        return lobby;
                                    }
                                    return {
                                        ...lobby,
                                        player_count: lobby.player_count + 1,
                                        players: lobby.players ? [...lobby.players, joinData.playerUsername!] : [joinData.playerUsername!]
                                    };
                                }
                                return lobby;
                            }));
                        }
                    } else if (message.type === dtos.MessageType.START_GAME) {
                        alert("Game Started! ID: " + message.startGame?.lobbyId);
                    }
                } else {
                    const response = JSON.parse(event.data);
                    
                    if (response.type === "OK" && response.payload) {
                        if (response.payload.GameLobbyDTOs) {
                            setLobbies(response.payload.GameLobbyDTOs);
                        } else if (response.payload.lobby_id) {
                            // Handles Create and Join ok responses
                            setCurrentLobbyId(response.payload.lobby_id);
                            setActiveTab("lobby");
                            
                            // Fetch the latest lobbies so the creator's lobby list is updated
                            const msg = dtos.Message.create({
                                type: dtos.MessageType.GET_GAME_LOBBIES
                            });
                            socket.send(new Uint8Array(dtos.Message.encode(msg).finish()));
                        }
                    } else if (response.type === "GAME_STARTED") {
                        alert("Game Started! ID: " + response.payload.game_id);
                    }
                }
            } catch (err) {
                console.error("Error parsing WS message:", err);
            }
        };

        socket.onclose = () => {
            console.log("WebSocket disconnected in Menu");
        };

        setWs(socket);

        return () => {
            socket.close();
        };
    }, []);

    const currentLobby = lobbies.find(l => l.id === currentLobbyId);

    return (
        <div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <button onClick={() => setActiveTab("profile")}>My Profile</button>
                <button onClick={() => setActiveTab("social")}>Social</button>
                <button onClick={() => setActiveTab("games")}>Games</button>
                {currentLobby && (
                    <button onClick={() => setActiveTab("lobby")}>Lobby</button>
                )}
                <button onClick={onLogout} style={{ marginLeft: 'auto', backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', padding: '5px 15px' }}>Logout</button>
            </div>

            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
                {activeTab === "profile" && <PlayerProfile player={player} />}
                {activeTab === "social" && <Social />}
                {activeTab === "games" && <Games ws={ws} lobbies={lobbies} />}
                {activeTab === "lobby" && currentLobby && (
                    <Lobby ws={ws} lobby={currentLobby} player={player} />
                )}
            </div>
        </div>
    )
}