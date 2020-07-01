const mongoose = require('mongoose');
const { Int32 } = require('mongodb');

var reportSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    StaffID : String,
    ItemsList : String,
     Total : Number,
     urlImg:String
} , { collection: 'Order' } );

var Order = mongoose.model('Order', reportSchema);

module.exports = Order;