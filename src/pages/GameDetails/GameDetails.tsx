import { useParams } from "react-router-dom";

export default function GameDetails() {
    const { id } = useParams();

    return (
        <div>
            <h1>Game Details for Game: {id}</h1>
            <p> Game ID: {id}   </p>
        </div>
    )

}