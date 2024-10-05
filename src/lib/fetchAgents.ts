/**
 * Fetches Valorant agents data from the API
 * @param {object} options
 * @param {string} options.lang - Language to fetch the agents in
 * @returns {Promise<ValorantAgent[]>} List of Valorant agents
 */

interface FetchAgentsOptions {
  lang: string;
}

export const fetchAgents = async ({ lang }: FetchAgentsOptions) => {
  try {
    const url = `${process.env.VALORANT_API_URL}&${lang}`;

    if (!url)
      throw new Error("VALORANT_API_URL is not defined");

    const response = await fetch(url);

    if (!response.ok)
      throw new Error("Failed to fetch data");

    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error(error);
  }
};
