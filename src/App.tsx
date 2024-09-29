import { Route, Routes } from "react-router-dom";
import { GameLauncher } from "@pages/GameLauncher.tsx";

import { Footer } from "@components/Footer.tsx";
import { Header } from "@components/Header.tsx";

const App = () => {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/lol" element={<h1>League of Legends</h1>} />
        <Route path="/valorant" element={<h1>Valorant</h1>} />
        <Route path="/" element={<GameLauncher />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
