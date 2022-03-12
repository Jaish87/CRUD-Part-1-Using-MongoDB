var EmployeeModel=require('./employee.model');
var express= require('express');
var app=express();
var mongoose=require('mongoose');
app.listen(9012,()=>{
    console.log('server started');
})
mongoose.connect("mongodb://localhost/company",(err)=>{
    if(err){
        console.log("Error",err);
    }
    else{
        console.log("db connnected");
    }
})
app.get('/employees',(req,res)=>{
    EmployeeModel.find({},(err,docs)=>{
        console.log(docs);
        res.send(docs);
    })
})