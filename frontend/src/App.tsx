import { useState, useEffect } from "react"
import Menu from "./Menu"

export interface PlayerData {
    id: number;
    username: string;
}

export default function App() {
    const [player, setPlayer] = useState<PlayerData | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    
    const [isLoginView, setIsLoginView] = useState(true)

    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";
                const response = await fetch(`${apiUrl}/gogame/me`, {
                    method: "GET",
                    credentials: "include" 
                })

                if (response.ok) {
                    const data = await response.json()
                    setPlayer({
                        id: data.player_id,
                        username: data.username
                    })
                } else {
                    setPlayer(null)
                }
            } catch (error) {
                console.error("Error connecting to the server:", error)
            } finally {
                setIsLoading(false)
            }
        }

        checkAuth()
    }, [])

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault()

        const endpoint = isLoginView ? "/gogame/login" : "/gogame/register"
        
        try {
            const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";
            const response = await fetch(`${apiUrl}${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: usernameInput, password: passwordInput }),
                credentials: "include"
            })

            if (response.ok) {
                if (isLoginView) {
                    const data = await response.json()
                    setPlayer({
                        id: data.player_id,
                        username: data.username
                    })
                } else {
                    alert("Account created successfully! You can now log in.")
                    setIsLoginView(true)
                    setPasswordInput("")
                }
            } else {
                alert(isLoginView ? "Login error! Incorrect username or password." : "Registration error! Maybe the user already exists.")
            }
        } catch (error) {
            console.error("Network error:", error)
        }
    }

    const handleLogout = async () => {
        try {
            const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";
            await fetch(`${apiUrl}/gogame/logout`, {
                method: "POST",
                credentials: "include"
            });
            setPlayer(null);
        } catch (error) {
            console.error("Logout error:", error);
        }
    }

    if (isLoading) {
        return <div>Checking session...</div>
    }

    return (
        <div style={{ padding: '20px' }}>
            {player ? (
                <Menu player={player} onLogout={handleLogout} /> 
            ) : (
                <div>
                    <h2>{isLoginView ? "Login" : "Register"}</h2>
                    
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '200px', gap: '10px' }}>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            value={usernameInput}
                            onChange={(e) => setUsernameInput(e.target.value)}
                            required
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                            required
                        />
                        <button type="submit">
                            {isLoginView ? "Login" : "Register"}
                        </button>
                    </form>

                    <p 
                        onClick={() => setIsLoginView(!isLoginView)} 
                        style={{ 
                            color: 'blue', 
                            cursor: 'pointer', 
                            fontSize: '14px', 
                            marginTop: '15px',
                            textDecoration: 'underline'
                        }}
                    >
                        {isLoginView 
                            ? "Don't have an account? Register" 
                            : "Already have an account? Login"}
                    </p>
                </div>
            )}
        </div>
    )
}