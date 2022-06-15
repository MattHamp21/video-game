import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { DataContext } from "../providers/DataProvider";

const GamesShow = () => {
  const [game, setGame] = useState({});
  const [characters, setCharacters] = useState([]);
  const { id } = useParams();
  const { activeGame, getGame, getChr, chrs } = useContext(DataContext);

  useEffect(() => {
    getGameData();
    getGameDataFromProvider();
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

  const getGameDataFromProvider = () => {
    getGame(id);
    getChr(id);
  };

  return (
    <div>
      <h1>Game Show</h1>
      <Link to="/games">back to authors</Link>
      <p>id: {id}</p>
      <p>game: {JSON.stringify(game)}</p>
      <p>characters: {JSON.stringify(characters)}</p>
      <h2>Data fom provider</h2>
      <p>Game: {JSON.stringify(activeGame)}</p>
      <p>Characters: {JSON.stringify(chrs)}</p>
    </div>
  );
};

export default GamesShow;
