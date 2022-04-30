const express = require('express')
const router = express.Router()
const scheme = require('../Model/Model')
router.post ('/', async(req,res)=>{
  try {
    const signUser = await scheme.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
     
     
    })
    res.status(200).json({
      message:'data posted',
      data:signUser
    })
  } catch (error) {
    res.status(404).json({
      message:'failed to register user',
      data: error.message,
    })
  }
})



router.get('/', async(req,res)=>{
  try {
    const getAllUser = await scheme.find()
    res.status(200).json({
      message:'all data in the schema',
      data: getAllUser
    })
  } catch (error) {
    res.status(404).json({
      message:'failed to get schema',
      data: error.message,
    })
  }
})



module.exports = router;