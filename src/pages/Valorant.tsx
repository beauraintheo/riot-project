import { useTranslation } from "react-i18next";

import AgentCard from "@components/valorant/AgentCard.tsx";
import { useQueryAgents } from "@hooks/useQueryAgents.ts";

import type { AgentCardProps } from "@commons/types.ts";
import { useGlow } from "@hooks/useGlow.ts";

export const Valorant = () => {
  const cardsRef = useGlow();
  const {
    i18n: { language },
  } = useTranslation();

  const { data } = useQueryAgents({ lang: language });

  return (
    <div className="valorant">
      <h1>Liste des agents</h1>

      <div className="valorant-agents" ref={cardsRef}>
        { data?.map((agent: AgentCardProps) => <AgentCard {...agent} />) }
      </div>
    </div>
  );
};
