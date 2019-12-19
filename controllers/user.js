const encryptPassword = require('encrypt-password') //Using command npm i --save encrypt-password
 
encryptPassword.secret = 'Secrect key never changed.'
encryptPassword.min = 8 
encryptPassword.max = 24
encryptPassword.pattern = /^\w{8,24}$/

module.exports = (app) => {

    // Import user's model
    const User = app.models.User;
    return { create, update, remove, list };
    // Create and save user
    function create(req, res) {
        createUser()
        function createUser(user) {
            return new Promise((resolve, reject) => {
                // commence par cree un objet user avec les données en req.body
                var newUser = new User(req.body);
// after create newUser we encrypt his password
        newUser.password = encryptPassword(newUser.password, 'signatrue')
// save new user
                newUser.save(function (err, item) {
                    if(err) { reject(err); res.sendStatus(500); };
                    if(item) { resolve(); res.sendStatus(200); };
                });
            });
        }
    }

   /* function update(req, res) {

        updateUser()

        function updateUser() {
            User.updateOne({email: req.body.email}, { firstName: req.body.firstName }, function(err, item) {
                if (err) {
                    reject(err);
                    res.status(500).send(`L'utilisateur n'a pas pu être modifié`);
                }
            })
        }
    }*/

    // Update user
    function update(req, res) {

        updateUser()
            .catch(err => console.log(err))

        function updateUser() {
            return new Promise((resolve, reject) => {
                User.updateOne({email: req.body.email}, req.body, function(err, item) {
                    if(err) { reject(err); res.sendStatus(500); }
                    else { if(item) { resolve(); res.sendStatus(200)} else {reject(500); res.status(500).send('Cannot update user.');};}
                })
            });
        }
    }

    // Remove user
    function remove(req, res) {

        removeUser()
            .catch(err => console.log(err))

        function removeUser() {
            return new Promise((resolve, reject) => {
                User.deleteOne({email: req.body.email}, function(err, item) {
                    if(err) { reject(err); res.sendStatus(500); }
                    else { if(item) { resolve(); res.sendStatus(200)} else {reject(500); res.status(500).send('Cannot remove user.');};}
                })
            });
        }
    }

    // List all users
    function list(req, res) {

        listUsers()
            .catch(err => console.log(err))

        function listUsers() {
            return new Promise((resolve, reject) => {
                User.find({}, function (err, item) {
                    if(err) { res.sendStatus(500); reject(err);};
                    if(item) { res.status(200).send(item); resolve()};
                });
            });
        }
    }

 };

