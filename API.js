const express=require('express')
require('../dbconfig/dbConnect')
const artistModel=require('../Model/Model')
const userModel=require('../Model/userModel')
const cors=require('cors')
//cors is used to connect frontend and backend simaltenously

const ex=express();

ex.use(express.json());
ex.use(cors())
ex.post('/artistRegister',async(req,resp)=>{
    const artist=new artistModel(req.body);
    const result=await artist.save()
    resp.send(result)
})

ex.post('/userRegister',async(req,resp)=>{
    const user=new userModel(req.body);
    const result=await user.save()
    resp.send(result)
})


ex.get("/artistLogin",async (req,resp)=>{
    const result=await artistModel.find()
    console.log(result);
    resp.send(result);
})


ex.get("/userLogin",async (req,resp)=>{
    const result=await userModel.find()
    console.log(result);
    resp.send(result);
})



ex.listen(4000)