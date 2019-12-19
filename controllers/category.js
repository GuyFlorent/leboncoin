module.exports = (app) => {

    // Import user's model
    const Category = app.models.Category;

    return { create, update, remove, list };

    // Create and save user
    function create(req, res) {

        createCategory()

        function createCategory(category) {
            return new Promise((resolve, reject) => {
                var newCategorie = new Category(req.body);
                newCategorie.save(function (err, item) {
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
                Category.updateOne({email: req.body.title}, req.body, function(err, item) {
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
                Category.deleteOne({email: req.body.title}, function(err, item) {
                    if(err) { reject(err); res.sendStatus(500); }
                    else { if(item) { resolve(); res.sendStatus(200)} else {reject(500); res.status(500).send('Cannot remove category.');};}
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
                Category.find({}, function (err, item) {
                    if(err) { res.sendStatus(500); reject(err);};
                    if(item) { res.status(200).send(item); resolve()};
                });
            });
        }
    }

 };

