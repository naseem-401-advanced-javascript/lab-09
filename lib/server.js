/* eslint-disable no-undef */
/* eslint-disable strict */

'use strict';

//third party depndencies
const express = require('express');
const morgan = require('morgan');

//custom routes
const notFoundHandler = require('../middleware/404.js');
const errorHandler = require('../middleware/500.js');

//custom Routes
const apiRouter = require('../routes/v1.js');

//app constant
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(apiRouter);
app.use(notFoundHandler);
app.use('*', errorHandler);

// Server listening

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 2323;
    app.listen(PORT, () => console.log(`lisent ${PORT}`));
  },
};

