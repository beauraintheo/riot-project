import { useGlow } from "@hooks/useGlow.ts";

interface GameCardProps {
  image: string;
  game: string;
  logo: string;
}

export const GameCard = ({
  image,
  game,
  logo,
}: GameCardProps) => {
  return (
    <div className="game-card">
      <img
        className="game-card-background"
        src={image}
        alt={`${game} background`}
      />

      <div className="game-card-content">
        <img src={logo} alt={`${game} logo`} />
      </div>
    </div>
  );
};
