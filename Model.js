const mongoose=require('mongoose')
const artistSchema=mongoose.Schema({
    "Name":{type:String,
    require:true},
    "artForm":{type:String,
        require:true},
    // "gender":{type:String,
    //     require:true},
    "mobileNumber":{type:Number,
        require:true},
    "email":{type:String,
        require:true},
    "password":{type:String,
        require:true, minlength: 5},
    "confirmPassword":{type:String,
        require:true, minlength: 5,
        equalTo: "#password"}
})

module.exports=mongoose.model("artists",artistSchema)

