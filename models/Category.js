var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    title: String,
    description: String,
    subCategories: [{
        type: Schema.Types.ObjectId,
        ref: 'SubCategory'
    }],
})

module.exports = mongoose.model('Category', categorySchema);