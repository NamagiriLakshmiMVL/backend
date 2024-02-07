const express = require("express")
const messageModel = require("../models/messageModel")

const router = express.Router()

router.post("/sent",async(req,res)=>{
    try{
        const newMessage = new newMessage(req.body)
        await newMessage
        res.send(newMessage)
    }
    catch(err){
        res.send(err)
    }
   
})


module.exports = router