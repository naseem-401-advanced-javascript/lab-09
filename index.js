/* eslint-disable no-undef */
/* eslint-disable strict */
'use strict';
const server = require('./lib/server.js');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(MONGODB_URI, mongooseOptions);

server.start(PORT);