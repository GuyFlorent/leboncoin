const router = require('express').Router();
module.exports = (app) => {
     // Create category
     router.post('/create', app.controllers.category.create);
     // Update category
     router.post('/update', app.controllers.category.update)
     // Remove category
     router.post('/remove', app.controllers.category.remove)
     // List all category
     router.post('/list', app.controllers.category.list)
    return router;
};