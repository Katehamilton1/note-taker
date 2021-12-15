// 1. Dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//4. Use a middleware to parse the JSON data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

// Use apiRoutes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});