import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NameThatNotePage from "./pages/games/NameThatNote";
import MatchThePitchPage from "./pages/games/MatchThePitch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<NameThatNotePage />} />
          <Route path="name-that-note" element={<NameThatNotePage />} />
          <Route path="match-the-pitch" element={<MatchThePitchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
