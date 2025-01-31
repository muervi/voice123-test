const express = require('express');
const cors = require('cors');
const searchRoutes = require('./routes/searchRoute');

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use('/api/search', searchRoutes);

module.exports = app;
