import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchedGames {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("fetching games");
    apiClient
      .get<FetchedGames>("/games")
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error));
    console.log("fetched games");
  }, []);

  console.log(games);
  return (
    <div>
      {error && <p>{error}</p>}
      {games && (
        <ul>
          {games.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GameGrid;
