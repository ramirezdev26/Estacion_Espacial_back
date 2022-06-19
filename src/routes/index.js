const express = require('express');
const spacecraftRouter = require('./spacecraft.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/spacecraft', spacecraftRouter);
}

module.exports = routerApi;
