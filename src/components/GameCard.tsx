import { Link } from "react-router-dom";

interface GameCardProps {
  link: string;
  image: string;
  game: string;
  logo: string;
}

export const GameCard = ({
  link,
  image,
  game,
  logo,
}: GameCardProps) => (
  <Link to={link}>
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
  </Link>
);
