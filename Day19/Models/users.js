const mongoose = require('mongoose');
const { type } = require('node:os');
const { Schema } = mongoose;

const userSchema = new Schema({
    name:String,
    age: Number,
    city:String,
    gender: String
})

const User = mongoose.model("user",userSchema);//iska simple mtlb humne user naam ka colln banaya aur userchema uska schema hoga 


module.exports = User;