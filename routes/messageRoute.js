const express = require("express")
const messageModel = require("../models/messageModel")

const router = express.Router()

router.post("/sent",async(req,res)=>{
    try{
        const newMessage = new messageModel(req.body)
        await newMessage.save()
        res.send(newMessage)
    }
    catch(err){
        res.send(err)
    }
   
})


router.post("/getting-msg",async(req,res)=>{
    try{
        const getMessage =await messageModel.find({to:req.body.items})
        
        res.send(getMessage)
    }
    catch(err){
        res.send(err)
    }
   
})


router.post("/getting-sent",async(req,res)=>{
    try{
        const send = await messageModel.find({from:req.body.data})
        res.send(send)
    }
    catch(err){
        res.send(err)
    }
})


module.exports = router