import logo from "./logo.svg";
import "./App.css";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import Games from "./Game";

import GameForm from "./Game/GameForm";
import GamesList from "./Game/GameList";
import GamesShow from "./Game/GameShow";
import Crud from "./AllCrud/Crud";

const PageWrapper = () => {
  return (
    <div>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/allCrud">Crud</Link>
        <Link to="/games">Games</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

const Home = () => {
  return <h1>Home</h1>;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Home />} />
          <Route path="/allCrud" element={<Crud />} />
          <Route path="/games" element={<Games />}>
            <Route index element={<GamesList />} />
            <Route path="/games/new" element={<GameForm />} />
            <Route path="/games/:id/edit" element={<GameForm />} />
            <Route path="/games/:id" element={<GamesShow />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
