const router = require('express').Router();
module.exports = (app) => {
     // Create advert
     router.post('/create', app.controllers.advert.create);
     // Update advert
     router.post('/update', app.controllers.advert.update)
     // Remove advert
     router.post('/remove', app.controllers.advert.remove)
     // List all advert
     router.post('/list', app.controllers.advert.list)
    return router;
};