import { useTranslation } from "react-i18next";

import LolBackground from "@assets/images/lol-background.webp";
import LolLogo from "@assets/images/lol-logo.webp";
import ValorantBackground from "@assets/images/valorant-background.webp";
import ValorantLogo from "@assets/images/valorant-logo.webp";
import { GameCard } from "@components/GameCard.tsx";
import { useGlow } from "@hooks/useGlow.ts";

export const GameLauncher = () => {
  const cardsRef = useGlow();
  const { t } = useTranslation();

  return (
    <div className="game-launcher">
      <h1>{t("GameList")}</h1>

      <div className="game-cards" ref={cardsRef}>
        <GameCard
          link="/lol"
          image={LolBackground}
          game="lol"
          logo={LolLogo}
        />

        <GameCard
          link="/valorant"
          image={ValorantBackground}
          game="valorant"
          logo={ValorantLogo}
        />
      </div>
    </div>
  );
};
