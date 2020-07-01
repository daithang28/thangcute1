const mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    Price: Number,
    Unit: String,
    Information: String,
    urlImg: String
} , { collection: 'Product' } );

var Product = mongoose.model('Product', productSchema);

module.exports = Product;