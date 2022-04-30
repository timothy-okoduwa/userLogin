const express = require('express')
const port = 7000
const app = express()
require('./Config/database')
const routerPath = require('./controller/Router')
app.get('/',(req,res)=>{
  res.status(200).send('all systems are functional')
})
app.use('/api',routerPath)
app.listen(port,()=>{
  console.log(`connected ${port}`);
  
})