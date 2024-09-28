import LolBackground from "@assets/images/lol-background.png";
import LolLogo from "@assets/images/lol-logo.png";
import ValorantBackground from "@assets/images/valorant-background.png";
import ValorantLogo from "@assets/images/valorant-logo.png";
import { GameCard } from "@components/GameCard.tsx";
import { useGlow } from "@hooks/useGlow.ts";

export const GameLauncher = () => {
  const cardsRef = useGlow();

  return (
    <div className="game-launcher">
      <h1>Veuillez choisir votre jeu</h1>

      <div className="game-cards" ref={cardsRef}>
        <GameCard
          image={LolBackground}
          game="lol"
          logo={LolLogo}
        />

        <GameCard
          image={ValorantBackground}
          game="valorant"
          logo={ValorantLogo}
        />
      </div>
    </div>
  );
};
