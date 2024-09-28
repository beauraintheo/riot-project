/**
 * Fetches Valorant agents data from the API
 * @returns {Promise<ValorantAgent[]>} The list of Valorant agents
 */
export const fetchAgents = async () => {
  try {
    const url = process.env.VALORANT_API_URL;

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
