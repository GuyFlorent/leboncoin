var mongoose = require('mongoose');

// Correct warning for findAndUpdate function
mongoose.set('useFindAndModify', false);


//connect to database

mongoose.connect('mongodb://localhost/', {dbName:'leboncoin',useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open', function(){
    console.log('MongoDB connected');
    // drop DB
    // mongoose.connection.db.dropDatabase();
});

module.exports = (app) => {
    app.models = {
        User : require('./User'),
        Category : require('./Category'),
        SubCategory : require('./SubCategory'),
        Product : require('./Product'),
        Advert : require('./Advert')
    }
};