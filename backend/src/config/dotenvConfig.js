require('dotenv').config();

module.exports = {
    port: process.env.PORT || 5000,
    apiBaseUrl: process.env.API_BASE_URL
};
