/* 
Created by: Jackie Sanchez
Date: 3/3/2026
Description: This file defines the Game interface, which represents a game in the application. 
            It includes properties such as id, name, genre, releaseDate, and rating.
*/

export interface Genre {
    id: number;
    name: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    rating: number;
    genres: Genre[];
    released: string;
}