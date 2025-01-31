const voice123Service = require("../services/searchService");

exports.searchVoices = async (req, res) => {
  try {
    const { keywords, page } = req.query;
    const results = await voice123Service.fetchVoiceActors(keywords, page);
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error: error.message });
  }
};
