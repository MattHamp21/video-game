import { Link, Outlet } from "react-router-dom";

const Games = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/Games">Games</Link>
        <Link to="/Games/new">New Author</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Games;
