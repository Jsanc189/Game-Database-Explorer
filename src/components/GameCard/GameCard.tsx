/*
created by: Jackie Sanchez
Date: 3/11/2026
Description: This file defines the GameCard component, which is responsible for displaying individual game information in a card format.
*/

type GameCard = {
   id: number;
   name: string;
   background_image: string;
   released: string;
   rating: number; 
} 

type Props = {
    game: GameCard;
}

export default function GameCard({ game }: Props) {
    return (
        <div>
            <h2>{game.name}</h2>
            <img src={game.background_image} alt={game.name} />
            <p>Released: {game.released}</p>
            <p>Rating: {game.rating}</p>
        </div>
    )
}