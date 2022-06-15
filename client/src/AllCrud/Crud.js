import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";

const Crud = () => {
  const {
    games,
    addGame,
    updateGame,
    deleteGame,
    getChr,
    chrs,
    addChr,
    updateChr,
    deleteChr,
  } = useContext(DataContext);

  return (
    <div>
      <h1>Crud</h1>
      <p> Crud</p>
      <p>Game : {JSON.stringify(games)} </p>
      <p>characters : {JSON.stringify(chrs)} </p>
      <h1>Get chraracters</h1>
      <button
        onClick={() => {
          getChr(games[0].id);
        }}
      >
        Get characters
      </button>

      <button
        onClick={() => {
          addChr(games[0].id, {
            name: "chr 4",
            age: 35,
          });
        }}
      >
        {" "}
        add Game
      </button>
      <button
        onClick={() => {
          updateChr(games[0].id, {
            id: 1,
            name: "chr5",
            age: 28,
          });
        }}
      >
        Update Character
      </button>

      <button
        onClick={() => {
          deleteChr(1, 1);
        }}
      >
        delete character
      </button>
    </div>
  );
};

export default Crud;
