/*
Created by Jackie Sanchez
Date: 3/3/2026
Description: This file defines the useFetchGames custom hook, which is responsible for fetching games data from the API 
            and managing the state of the fetched games.
*/

import { useEffect, useState } from "react";
import { Game } from "../types/Game";
import { fetchGames } from '../services/api';

export default function useFetchGames(search: string, page: number) {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadGames = async () => {
            try{
                setLoading(true);
                setError(null);
                const data = await fetchGames(search, page);
                setGames(data.results);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };
        loadGames();
    }, [search, page]);

    return { games, loading, error };
}
