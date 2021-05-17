'use strict';

//require express to run the server and handle the requests
const express = require('express');
const app = express();
app.use(express.json());

// require the error file and the middlewares
const errorHandler = require('./error-handlers/500');
const notFound = require('./error-handlers/404.js');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
//make use of logger middleware as a global one for all routes
app.use(logger);

//routes
app.get('/', (req, res) => {
  res.send('i am working !');
});
app.get('/person', validator, (req, res) => {
  const output = {
    name: req.query.name,
  };
  res.json(output);
});
//make use of 500 error file as a global one
app.use(errorHandler);
// make use of 404 file for the rest of undefined route
app.use('*', notFound);

function start(port) {
  app.listen(port, () => {
    console.log('app is working . . . ');
    console.log(`app is listening on http://localhost:${port}`);
  });
}
module.exports = {
  app: app,
  start: start,
};
