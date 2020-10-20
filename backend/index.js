const express=require("express");
const bodyParser = require('body-parser')
const mongoose=require("mongoose");
const cors = require('cors');
const Model = require("./model");
const fs = require('fs'); 
const path = require('path'); 
const multer = require('multer'); 
require('dotenv').config()



const app=express()
const port=process.env.PORT||5000;

app.use(express.json())
app.use(bodyParser.json())
app.use(cors());



const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{


    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
});

const connection=mongoose.connection;

connection.once('open',()=>{
    console.log("mongo db connected successfully");
})

app.listen(port,()=>{
    console.log(`Server is running in port:${port}`)
})



app.post('/',(req,res)=>{

    const model=new Model(req.body)

    console.log(req.body)
    console.log(req.body.photo)
    model.photo.data=fs.readFileSync(req.body.photo)
    model.photo.contentType='images'

    

    model.save((err,data)=>{
        if(!err)
        {
            console.log('done')
            res.json(data)
        }
        else{
            res.status(400).json({
                err:"Not able to save"
            })
        }
    })
    
})