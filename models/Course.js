const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    
   
    name: {type:String},
    category : {type:String},
    trainer : {type:String },
    description : {type:String },
    image : {type:String },
    fee : {type:Number , default:0 },
    date: { type: Date, default: Date.now },
    noOfParticipants : {type:Number , default:0 },
    partcipants: [{
    email: {type: String},
   
    }],
   
   

    
});

const Course = mongoose.model('Courses',CourseSchema);


module.exports = Course;