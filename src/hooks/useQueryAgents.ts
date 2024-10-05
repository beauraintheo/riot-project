import { useQuery } from "@tanstack/react-query";

import { fetchAgents } from "@lib/fetchAgents.ts";

interface UseQueryAgentsProps {
  lang: string;
}

export const useQueryAgents = ({ lang }: UseQueryAgentsProps) => {
  const {
    data,
    error,
    isLoading,
  } = useQuery({
    queryKey: [ "fetchAgents" ],
    queryFn: () => fetchAgents({ lang }),
  });

  const { data: agents } = data || {};

  return {
    data: agents,
    error,
    isLoading,
  };
};
