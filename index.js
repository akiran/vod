// intro point for our server.
// PRO-TIP: if you have an index.js file
// on the root of a folder in node
// you can just require that folder and node will
// automatically require the index.js on the root

// setup config first before anything by requiring it
var config = require('./server/config/config');
var app = require('./server/server');
var logger = require('./server/util/logger');
const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/vod-development' , (err, resp) => {
  if (err) {
    return logger.log(`Error while trying to connect to the MongoDB: ${err}`);
  };

  console.log('Connection to the MongoDB properly done');

  app.listen(config.port);
  logger.log('API REST listening on http://localhost:' + config.port);

});
