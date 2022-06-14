import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const GamesList = () => {
  const [game, setGames] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getGames();
  }, []);

  const renderGames = () => {
    return game.map((a) => {
      return (
        <div className="component">
          <p>{a.name}</p>
          <button onClick={() => navigate(`/games/${a.id}`)}>show</button>
        </div>
      );
    });
  };

  const getGames = async () => {
    try {
      let res = await axios.get("/api/games");
      setGames(res.data);
    } catch (err) {
      alert("err getGames occured");
    }
  };
  return (
    <div>
      <h1>GamesList</h1>
      {renderGames()}
    </div>
  );
};

export default GamesList;
