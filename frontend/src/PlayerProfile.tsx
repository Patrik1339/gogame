import { useState } from "react"
import type { PlayerData } from "./App"

interface MatchHistory {
    id: number;
    date: string;
    result: string;
    score: string;
}

export default function PlayerProfile({ player }: { player: PlayerData }) {
    const [stats] = useState({ wins: 0, totalGames: 0 });
    const [matchHistory] = useState<MatchHistory[]>([]);

    return (
        <div>
            <h2>Hello, {player.username}!</h2>
            
            <div style={{ marginBottom: '20px', padding: '10px', background: '#f0f0f0', display: 'inline-block' }}>
                <strong>Stats:</strong> {stats.wins} Wins / {stats.totalGames} Matches Played 
                (Winrate: {stats.totalGames > 0 ? Math.round((stats.wins / stats.totalGames) * 100) : 0}%)
            </div>

            <h3>Match History</h3>
            <table border={1} cellPadding={8} style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Result</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {matchHistory.length === 0 ? (
                        <tr>
                            <td colSpan={3} style={{ textAlign: 'center' }}>No matches played yet</td>
                        </tr>
                    ) : (
                        matchHistory.map(match => (
                            <tr key={match.id}>
                                <td>{match.date}</td>
                                <td style={{ color: match.result === 'Win' ? 'green' : 'red' }}>{match.result}</td>
                                <td>{match.score}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}