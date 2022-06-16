import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";
import { Form } from "react-router-dom";

const GameForm = () => {
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
      <h1>Games Form</h1>
      <p>update and create Game here</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Year:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" onClick={addGame} />
      </form>
      <p>Game : {JSON.stringify(games)} </p>
    </div>
  );
};

export default GameForm;
