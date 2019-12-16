const router = require('express').Router();

module.exports = (app) => {
    router.get('/', function(req, res) {
        res.send('Hello world');
    });

    return router;
}