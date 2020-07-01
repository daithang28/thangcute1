const mongoose = require('mongoose');

var shopSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    Information: String,
} , { collection: 'aboutus' } );

var Account = mongoose.model('shop', accountSchema);

module.exports = Shop;