import { useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const initialGame = location.pathname.includes("match-the-pitch")
    ? "match-the-pitch"
    : "name-that-note";

  const [selectedGame, setSelectedGame] = useState(initialGame);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const game = e.target.value;
    setSelectedGame(game);
    navigate(`/${game}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Banner + Dropdown side by side */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-blue-600 text-white p-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
          Train Your Ears
        </h1>
        <select
          value={selectedGame}
          onChange={handleChange}
          className="p-2 rounded border border-black text-black bg-white w-full sm:w-auto"
        >
          <option value="name-that-note">Name That Note</option>
          <option value="match-the-pitch">Match The Pitch</option>
        </select>
      </div>

      {/* Game content rendered via Outlet */}
      <div className="flex justify-center mt-6 px-4">
        <div className="w-full max-w-4xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
