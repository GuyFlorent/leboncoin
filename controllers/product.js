module.exports = (app) => {

    // Import Product's model
    const Product = app.models.Product;

    return { create, update, remove, list };

    // Create and save Product
    function create(req, res) {

        createProduct()

        function createProduct(category) {
            return new Promise((resolve, reject) => {
                var newProduct= new Product(req.body);
                newProduct.save(function (err, item) {
                    if(err) { reject(err); res.sendStatus(500); };
                    if(item) { resolve(); res.sendStatus(200); };
                });
            });
        }
    }

    // Update Product
    function update(req, res) {

        updateUser()
            .catch(err => console.log(err))

        function updateUser() {
            return new Promise((resolve, reject) => {
                Product.updateOne({email: req.body.title}, req.body, function(err, item) {
                    if(err) { reject(err); res.sendStatus(500); }
                    else { if(item) { resolve(); res.sendStatus(200)} else {reject(500); res.status(500).send('Cannot update user.');};}
                })
            });
        }
    }

    // Remove Product
    function remove(req, res) {

        removeUser()
            .catch(err => console.log(err))

        function removeUser() {
            return new Promise((resolve, reject) => {
                Product.deleteOne({email: req.body.title}, function(err, item) {
                    if(err) { reject(err); res.sendStatus(500); }
                    else { if(item) { resolve(); res.sendStatus(200)} else {reject(500); res.status(500).send('Cannot remove category.');};}
                })
            });
        }
    }

    // List all Products
    function list(req, res) {

        listUsers()
            .catch(err => console.log(err))

        function listUsers() {
            return new Promise((resolve, reject) => {
                Product.find({}, function (err, item) {
                    if(err) { res.sendStatus(500); reject(err);};
                    if(item) { res.status(200).send(item); resolve()};
                });
            });
        }
    }

 };

