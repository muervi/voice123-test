const axios = require("axios");
const Provider = require("../models/searchModel");

exports.fetchVoiceActors = async (keywords = "voice", page = 1) => {
  try {
    const url = `https://api.sandbox.voice123.com/providers/search/?service=voice_over&keywords=${encodeURIComponent(
      keywords
    )}&page=${page}`;
    const response = await axios.get(url);
    
    return response.data.providers.map(Provider.fromApiResponse);
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
