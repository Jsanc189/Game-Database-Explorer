/* 
Created by: Jackie Sanchez
date: 3/3/2026
Description: This file defines the API service for fetching games data from the RAWG API.
*/

import { GamesResponse } from "../types/ApiResponses"; 

const BASE_URL = "https://api.rawg.io/api";

export async function fetchGames(
  search: string = "",
  page: number = 1
) {
  //const API_KEY = import.meta.env.VITE_RAWG_KEY;
  const API_KEY = "27f3f642af0446d59adc513204b5234b";

  const response = await fetch(
    `${BASE_URL}/games?key=${API_KEY}&search=${search}&page=${page}`
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  return response.json();
}
