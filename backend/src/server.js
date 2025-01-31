const app = require('./app');
const searchRoutes = require("./routes/searchRoute");

const { port } = require('./config/dotenvConfig');

app.use("/api/search", searchRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



