const router = require('express').Router();
module.exports = (app) => {
     // Create subCategory
     router.post('/create', app.controllers.subCategory.create);
     // Update subCategory
     router.post('/update', app.controllers.subCategory.update)
     // Remove subCategory
     router.post('/remove', app.controllers.subCategory.remove)
     // List all subCategory
     router.post('/list', app.controllers.subCategory.list)
    return router;
};