//connection to the databese
var mongoose = require('mongoose');
//save it in a variable
var Shema = mongoose.Schema;
//parameter for creating a new shema
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

//export that usershema as User
module.exports = mongoose.model('User', userShema);