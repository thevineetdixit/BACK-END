const mongoose = require('mongoose');
 
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String
    },
    age : {
        type : Number,
        min : 14,
        max : 70
    },
    gender : {
        type : String
    },
    emailId : {
        type : String,
        required : true
    },
    password : {
        type : String
    },
    photo : {
        type : String
    }
})

const User = mongoose.model("user",userSchema);//iska simple mtlb humne user naam ka colln banaya aur userchema uska schema hoga 


module.exports = User;