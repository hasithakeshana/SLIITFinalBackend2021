const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    
   
    email : {type:String},
    password : {type:String},
    city : {type:String},
    
});

const Users = mongoose.model('ValidUsers',UsersSchema);


module.exports = Users;