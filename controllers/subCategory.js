module.exports = (app) => {

    // Import createSubCategory's model
    const SubCategory = app.models.SubCategory;

    return { create, update, remove, list };

    // Create and save createSubCategory
    function create(req, res) {

        createSubCategory()

        function createSubCategory(subCategory) {
            return new Promise((resolve, reject) => {
                var newSubCategie = new SubCategory(req.body);
                newSubCategie.save(function (err, item) {
                    if(err) { reject(err); res.sendStatus(500); };
                    if(item) { resolve(); res.sendStatus(200); };
                });
            });
        }
    }

    // Update user
    function update(req, res) {

        updateUser()
            .catch(err => console.log(err))

        function updateUser() {
            return new Promise((resolve, reject) => {
                SubCategory.updateOne({email: req.body.title}, req.body, function(err, item) {
                    if(err) { reject(err); res.sendStatus(500); }
                    else { if(item) { resolve(); res.sendStatus(200)} else {reject(500); res.status(500).send('Cannot update user.');};}
                })
            });
        }
    }

    // Remove createSubCategory
    function remove(req, res) {

        removeUser()
            .catch(err => console.log(err))

        function removeUser() {
            return new Promise((resolve, reject) => {
                SubCategory.deleteOne({email: req.body.title}, function(err, item) {
                    if(err) { reject(err); res.sendStatus(500); }
                    else { if(item) { resolve(); res.sendStatus(200)} else {reject(500); res.status(500).send('Cannot remove category.');};}
                })
            });
        }
    }

    // List all createSubCategory
    function list(req, res) {

        listUsers()
            .catch(err => console.log(err))

        function listUsers() {
            return new Promise((resolve, reject) => {
                SubCategory.find({}, function (err, item) {
                    if(err) { res.sendStatus(500); reject(err);};
                    if(item) { res.status(200).send(item); resolve()};
                });
            });
        }
    }

 };

