import { Link } from "react-router-dom";

import type { AgentCardProps } from "@commons/types.ts";

const AgentCard = ({
  uuid,
  displayName,
  fullPortrait,
}: AgentCardProps) => (
  <Link to={`/valorant/agents/${uuid}`}>
    <div className="agent-card">
      <img src={fullPortrait} alt={displayName} />
      <h2>{displayName}</h2>
    </div>
  </Link>
);

export default AgentCard;
