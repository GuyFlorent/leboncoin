const router = require('express').Router();
module.exports = (app) => {
   // Is api online
  router.get('/', function (req, res) {
    res.sendStatus(200);
  });
  //route for connection with email in login
  router.post('/login', app.controllers.common.login);
    return router;
}