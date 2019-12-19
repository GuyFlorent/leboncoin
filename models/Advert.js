var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var advertSchema = new Schema ({
    title: String,
    description: String,
    reference: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    createdDate: {type: Date, default: new Date}
})

module.exports = mongoose.model('Advert', advertSchema);