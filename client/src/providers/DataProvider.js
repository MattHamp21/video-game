// React.createContext API

import axios from "axios";
import React, { useEffect, useState } from "react";

//--- return to this for home work ---

// 1. a way to consume data (useContext hook)
// we export the context and give that to the useContext hook
// in another component
// let x = useContext(DataContext)
export const DataContext = React.createContext();

//2.  a way to provide data with the value props
const DataProvider = (props) => {
  // crud actions on game
  const [games, setGames] = useState([]);
  const [activeGame, setActiveGame] = useState(null);
  const [chrs, setChrs] = useState(null);

  useEffect(() => {
    getGames();
    getChr();
  }, []);

  const getGames = async () => {
    try {
      let res = await axios.get("/api/games");
      setGames(res.data);
    } catch (err) {
      alert("err Data Provider");
    }
  };

  const getGame = async (gameId) => {
    try {
      let res = await axios.get(`/api/games/${gameId}`);
      setActiveGame(res.data);
    } catch (err) {
      alert("err occured get Game");
    }
  };

  const addGame = async (game) => {
    if (!game.name || game.name === "") {
      alert("bad author data");
      return;
    }
    try {
      let res = await axios.post("/api/games", game);
      setGames([res.data, ...games]);
    } catch (err) {
      alert("err occured addGame");
    }
  };
  // todo
  const deleteGame = async (id) => {
    try {
      await axios.delete(`/api/games/${id}`);
      setGames(games.filter((g) => g.id !== id));
    } catch (err) {
      alert("err Data Provider");
    }
  };

  const updateGame = async (game) => {
    if (game.name === "" || !game.id) {
      alert("bad author data");
      return;
    }
    try {
      let res = await axios.put(`/api/games/${game.id}`, game);
      let updateGame = game.map((a) => (a.id === res.data.id ? res.data : a));
      setGames(updateGame);
    } catch (err) {
      alert("err occured addGa,e");
    }
  };

  const getChr = async (gameId) => {
    if (!gameId) {
      alert("you need id ");
      return;
    }
    try {
      let res = await axios.get(`/api/games/${gameId}/characters`);
      setChrs(res.data);
    } catch (err) {
      alert("err occurend getChr");
    }
  };

  const addChr = async (gameId, character) => {
    try {
      let res = await axios.post(`/api/games/${gameId}/chraracters`, character);
      setChrs([res.data, ...chrs]);
    } catch (err) {
      alert("err occured add chr");
    }
  };

  const updateChr = async (gameId, chr) => {
    try {
      let res = await axios.put(
        `/api/games/${gameId}/characters/${chr.id}`,
        chr
      );
      let updateChrs = chrs.map((c) => (c.id === res.data.id ? res.data : c));
      setChrs(updateChrs);
    } catch (err) {
      alert("err occured update chr");
    }
  };

  const deleteChr = async (gameId, chrId) => {
    try {
      let res = await axios.delete(`/api/games/${gameId}/characters/${chrId}`);
      let updateChrs = chrs.filter((c) => c.id !== res.data.id);
      setChrs(updateChrs);
    } catch (err) {
      alert("err occured");
    }
  };

  return (
    <DataContext.Provider
      value={{
        games,
        getGames,
        addGame,
        deleteGame,
        updateGame,
        updateChr,
        deleteChr,
        addChr,
        getChr,
        getGame,
        activeGame,
        chrs,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;

// in another component
// let x = useContext(DataContext)
// x is going to be the value of the value prop
