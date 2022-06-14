import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const GamesShow = () => {
  const [game, setGame] = useState({});
  const [characters, setCharacters] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getGameData();
  }, []);

  const getGameData = async () => {
    try {
      let gameRes = await axios.get(`/api/games/${id}`);
      setGame(gameRes.data);
      let characterRes = await axios.get(`/api/games/${id}/characters`);
      setCharacters(characterRes.data);
    } catch (err) {
      alert("error occured getting Data");
    }
  };
  return (
    <div>
      <h1>Game Show</h1>
      <Link to="/games">back to authors</Link>
      <p>id: {id}</p>
      <p>game: {JSON.stringify(game)}</p>
      <p>characters: {JSON.stringify(characters)}</p>
    </div>
  );
};

export default GamesShow;
