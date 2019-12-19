var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subCategorySchema = new Schema ({
    title: String,
    description: String
})

module.exports = mongoose.model('SubCategory', subCategorySchema);