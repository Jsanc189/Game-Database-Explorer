/*
Created by Jackie Sanchez
Date: 3/3/2026
Description:
*/

import { Routes, Route } from "react-router-dom";
import GameDetails from "./pages/GameDetails/GameDetails";
import Home from "./pages/Home/Home";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:id" element={<GameDetails />} />
        </Routes>
    );
}
