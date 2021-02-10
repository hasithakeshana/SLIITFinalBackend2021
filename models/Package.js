const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PackageSchema = new Schema({
    
   
    name: {type:String},
    category : {type:String},
    trainer : {type:String },
    description : {type:String },
    image : {type:String },
    fee : {type:Number , default:0 },
    time : {type:String },
    partcipants: [{
    email: {type: String},
   
    }],
   
});

const package = mongoose.model('FoodPackages',PackageSchema);


module.exports = package;