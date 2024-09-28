import { useQuery } from "@tanstack/react-query";

import { fetchAgents } from "@lib/fetchAgents.ts";

export const useQueryAgents = () => {
  const {
    data,
    error,
    isLoading,
  } = useQuery({
    queryKey: [ "fetchAgents" ],
    queryFn: fetchAgents,
  });

  return {
    data,
    error,
    isLoading,
  };
};
