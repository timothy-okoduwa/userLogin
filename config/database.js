
const mongoose = require('mongoose')

const key = 'mongodb://localhost/2717'
mongoose.connect(key)
mongoose.connection.on('connection',(stream)=>{
  console.log('all set up ');
  
})
.once('error',(stream)=>{
  console.log('intruder');
  
})

module.exports=mongoose;