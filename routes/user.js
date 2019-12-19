const router = require('express').Router();

module.exports = (app) => {
     // Create user
     router.post('/create', app.controllers.user.create);
     // Update user
     router.post('/update', app.controllers.user.update)
     // Remove user
     router.post('/remove', app.controllers.user.remove)
     // List all users
     router.post('/list', app.controllers.user.list)
    return router;
};