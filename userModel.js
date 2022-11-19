const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    "userName":String,  
    "gender":String,
    "mobileNumber":Number,
    "email":String,
    "password":String,
    "confirmPassword":String
})

module.exports=mongoose.model("user",userSchema)