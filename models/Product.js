var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema ({
    title: String,
    description: String,
    images: [{
        type: String,
        default: ["../../../assets/images/annonce.jpg"]
    }],
    price: Number,
    subCategories: [{
        type: Schema.Types.ObjectId,
        ref: 'SubCategory'
    }],
})

module.exports = mongoose.model('Product', ProductSchema);