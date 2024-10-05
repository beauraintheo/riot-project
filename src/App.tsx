import { Route, Routes } from "react-router-dom";

import { Footer } from "@components/Footer.tsx";
import { Header } from "@components/Header.tsx";
import { Valorant } from "@pages/Valorant.tsx";
import { GameLauncher } from "@pages/GameLauncher.tsx";

const App = () => {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/lol" element={<h1>League of Legends</h1>} />
        <Route path="/valorant" element={<Valorant />} />
        <Route path="/" element={<GameLauncher />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
