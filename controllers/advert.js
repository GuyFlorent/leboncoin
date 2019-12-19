module.exports = (app) => {

    // Import Advert's model
    const Advert = app.models.Advert;

    return { create, update, remove, list };

    // Create and save Advert
    function create(req, res) {

        createAdvert()

        function createAdvert(category) {
            return new Promise((resolve, reject) => {
                var newAdvert = new Advert(req.body);
                newAdvert.save(function (err, item) {
                    if(err) { reject(err); res.sendStatus(500); };
                    if(item) { resolve(); res.sendStatus(200); };
                });
            });
        }
    }

    // Update Advert
    function update(req, res) {

        updateUser()
            .catch(err => console.log(err))

        function updateUser() {
            return new Promise((resolve, reject) => {
                Advert.updateOne({email: req.body.title}, req.body, function(err, item) {
                    if(err) { reject(err); res.sendStatus(500); }
                    else { if(item) { resolve(); res.sendStatus(200)} else {reject(500); res.status(500).send('Cannot update user.');};}
                })
            });
        }
    }

    // Remove Advert
    function remove(req, res) {

        removeAdvert()
            .catch(err => console.log(err))

        function removeAdvert() {
            return new Promise((resolve, reject) => {
                Advert.deleteOne({email: req.body.title}, function(err, item) {
                    if(err) { reject(err); res.sendStatus(500); }
                    else { if(item) { resolve(); res.sendStatus(200)} else {reject(500); res.status(500).send('Cannot remove category.');};}
                })
            });
        }
    }

    // List all Advert
    function list(req, res) {

        listAdvert()
            .catch(err => console.log(err))

        function listAdvert() {
            return new Promise((resolve, reject) => {
                Advert.find({}, function (err, item) {
                    if(err) { res.sendStatus(500); reject(err);};
                    if(item) { res.status(200).send(item); resolve()};
                });
            });
        }
    }

 };

