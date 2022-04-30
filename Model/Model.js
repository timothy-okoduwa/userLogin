const mongoose = require('mongoose')
const Login = mongoose.Schema({
  Name:{
    type:String,
    required:true,
  },
 
  email:{
    type:String,
    required:true,
  },
 
  password:{
    type:String,
    required:true,
  },
 
})
const scheme = mongoose.model('switch', Login)
module.exports= scheme