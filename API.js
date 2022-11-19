const express = require("express");
const cors=require('cors')
// const mongoose = require ("mongoose")
require("../dbconfig/dbconnect"); //establishes connection with db
const CardModel = require("../model/CardModel"); //establishes connection with productSchema
const ex = express();

ex.use(express.json());
ex.use(cors())

// // Insert new product
// ex.post("/insertProduct", async (req, res) => {
//   const product = new ProductModel(req.body);
//   const result = await product.save();
//   res.send(result);
// });


// //

 ex.post("/createNewPost", async (req, res) => {
   const product = new CardModel(req.body);
   const result = await product.save();
   res.send(result);
 });



 ex.get("/showNewPost" ,async (req,resp)=>{
   const result=await CardModel.find()
    //console.log(result); to get the result in terminal ie he console
   resp.send(result)
   // to get the result in browser ie  http://localhost:4000/getProduc
 })


// const multer=require('multer')
// const CardsModel=require('../model/CardModel')
// const Storage=multer.diskStorage({
//     destination:'uploads',
//     filename:(req,file,cb)=>{
//         cb(null, file.originalname);
//     },
// });
// const upload= multer({
//     storage:Storage
// }).single('testImage')
// ex.post('/insertCards',async(req,resp)=>{
//     upload(req,resp,(err)=>{
//         if(err){console.log(err);}
    
//     else{
//         const newImage=new CardsModel({
//             testName:req.body.testName,
//             testDescription:req.body.testDescription,
//             price:req.body.price,
//             image:{
//                 data:req.file.filename,
//                 contentType:'image/png'
//             }
//         })
//         newImage.save()
//         .then(()=>resp.send("Successfully uploaded"))
//         .catch(err=>console.log(err))
//     }}
//     )

// })




ex.listen(4000);
