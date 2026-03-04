/*
Created by Jackie Sanchez
Date: 3/3/2026
Description: This file defines the Home component, which serves as the main page of the application. 
            It includes a search bar for users to search for games and displays a list of games based on the search query.
*/

import { useState } from "react";
import useFetchGames from "../../hooks/userFetchGames";

export default function Home() {
    const [search, setSearch] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const { games, loading, error } = useFetchGames(search, page);

    return (
        <div>
            <h1>Game Explorer</h1>

            <input 
                type="text"
                placeholder="Search for games..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </div>
    )
}