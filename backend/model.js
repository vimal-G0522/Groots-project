const mongoose=require('mongoose')

const model=new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    country:{
        type:String
    },
    dob:{
        type:Date
    },
    color:{
        type:String
    },
    photo:{
        data: Buffer, 
        contentType: String 
    },
    cgpa:{
        type:Number
    },
    languages:{
        type:String
    },
    site:{
        type:String
    },
    gender:{
        type:String
    }


})

module.exports=mongoose.model("model",model)