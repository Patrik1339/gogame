import { useState, useEffect } from "react"
import PlayerProfile from "./PlayerProfile"
import Social from "./Social"
import Games from "./Games"
import type { GameLobby } from "./Games"
import Lobby from "./Lobby"
import type { PlayerData } from "./App"

interface MenuProps {
    player: PlayerData;
}

export default function Menu({ player }: MenuProps) {
    const [activeTab, setActiveTab] = useState<"profile" | "social" | "games" | "lobby">("profile");
    
    const [ws, setWs] = useState<WebSocket | null>(null);
    const [lobbies, setLobbies] = useState<GameLobby[]>([]);
    const [currentLobbyId, setCurrentLobbyId] = useState<string | null>(null);

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:8080/ws");

        socket.onopen = () => {
            console.log("WebSocket connected in Menu");
            socket.send(JSON.stringify({
                type: "GET_GAME_LOBBIES",
                payload: {}
            }));
        };

        socket.onmessage = (event) => {
            try {
                const response = JSON.parse(event.data);
                
                if (response.type === "OK" && response.payload) {
                    if (response.payload.GameLobbyDTOs) {
                        setLobbies(response.payload.GameLobbyDTOs);
                    } else if (response.payload.lobby_id) {
                        // Handles Create and Join ok responses
                        setCurrentLobbyId(response.payload.lobby_id);
                        setActiveTab("lobby");
                        
                        // Fetch the latest lobbies so the creator's lobby list is updated
                        socket.send(JSON.stringify({
                            type: "GET_GAME_LOBBIES",
                            payload: {}
                        }));
                    }
                } else if (response.type === "NEW_LOBBY_AVAILABLE") {
                    socket.send(JSON.stringify({
                        type: "GET_GAME_LOBBIES",
                        payload: {}
                    }));
                } else if (response.type === "PLAYER_JOINED_LOBBY") {
                    const updatedLobby = response.payload as GameLobby;
                    setLobbies(prevLobbies => prevLobbies.map(lobby => 
                        lobby.id === updatedLobby.id ? updatedLobby : lobby
                    ));
                } else if (response.type === "GAME_STARTED") {
                    alert("Game Started! ID: " + response.payload.game_id);
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