// 1. Dependencies
const express = require('express');

// 2. express' server called app
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');



app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});