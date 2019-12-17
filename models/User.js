var mongoose = require('mongoose');
var Shema = mongoose.Schema;

var userShema = new Shema({
    firstname: String,
    lastname : String,
    birthDate: Date,
    gender: String,
    email: String,
    password: String,
    phone: String,
    isAdmin: {type: Boolean, default: false},
    registerDate: {type: Date, default: new Date}
});

module.exports = mongoose.model('User', userShema);