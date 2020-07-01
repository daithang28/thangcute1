const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    StaffID: String,
    ItemsList: String,
    Total: Number,
    urlImg:String
} , { collection: 'Order' } );


/// ***************** ***************** *****************
const uri = 'mongodb://localhost:27017/atnshop';
const NameDataBase =  "CloudATNmonggoDB"; // "CloudDB";

/// ***************** ***************** *****************
async function runInsert(NameTable , newRec) {
	
	const xdbo = await MongoClient.connect(
		uri, 
		{ useNewUrlParser: true , useUnifiedTopology: true }
    );    
    const dbo = xdbo.db(NameDataBase);
    
	////// Run - Query
	const results = await dbo.collection(Order).insertOne(newRec);

    console.log(results);
	return results;
}




///// Gọi hàm Insert !!!
runInsert("Order" ,  
        {
            _id : new mongoose.mongo.ObjectId(),
            StaffID : "vusername",
            ItemsList : "dssp",
            Total : 0
        }
    );