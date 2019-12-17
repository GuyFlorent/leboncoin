var mongoose = require('mongoose');

//connect to database

mongoose.connect('mongodb://localhost/leboncoin', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open', function(){
    console.log('MongoDB connected');
});

module.exports = (app) => {
    app.models = {
        User : require('./User')
    }
};