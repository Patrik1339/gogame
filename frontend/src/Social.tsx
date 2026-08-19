import { useState } from "react"

interface Player {
    id: number;
    username: string;
    status: string;
}

export default function Social() {
    const [playersList] = useState<Player[]>([]);

    return (
        <div>
            <h2>Social - Add friends</h2>
            <table border={1} cellPadding={8} style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {playersList.length === 0 ? (
                        <tr>
                            <td colSpan={3} style={{ textAlign: 'center' }}>No players found</td>
                        </tr>
                    ) : (
                        playersList.map(p => (
                            <tr key={p.id}>
                                <td>{p.username}</td>
                                <td>{p.status}</td>
                                <td>
                                    <button onClick={() => alert(`Request sent to ${p.username}`)}>
                                        Add Friend
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