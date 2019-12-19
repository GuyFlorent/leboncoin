const router = require('express').Router();
module.exports = (app) => {
     // Create product
     router.post('/create', app.controllers.product.create)
     // Update product
     router.post('/update', app.controllers.product.update)
     // Remove product
     router.post('/remove', app.controllers.product.remove)
     // List all product
     router.post('/list', app.controllers.product.list)
    return router;
};