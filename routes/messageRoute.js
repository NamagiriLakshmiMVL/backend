const express = require("express")
const userModel = require("../models/userModel")

const router = express.Router()

router.post("/sent",async(req,res)=>{
    try{
        const newMessage = await userModel.findOneAndUpdate({email:req.body.to},{$push:{message:req.body.message}})
        res.send(newMessage)
    }
    catch(err){
        res.send(err)
    }
   
})

module.exports = router