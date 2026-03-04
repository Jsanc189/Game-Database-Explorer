/*
Created by Jackie Sanchez
Date: 3/3/2026
Description: This file defines the ApiResponse interface, which represents the structure of the response received from the API. 
            It includes properties such as count, next, previous, and results, which is an array of Game objects.
*/

import { Game } from './Game';

export interface GamesResponse {
    cont: number;
    next: string | null;
    previous: string | null;
    results: Game[];
}