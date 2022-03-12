var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var employeesSchema=new Schema({
    id:{
        type:Number
    },
    name:{
        type:String
    },
    address:{
        type:String
    }
})
module.exports=mongoose.model('employee',employeesSchema);