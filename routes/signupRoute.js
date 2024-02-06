const express = require("express")
const userModel = require("../models/userModel")
const router = express.Router()

router.post("/password", async (req, res) => {
    try {
        let newUser = new userModel(req.body)
        await newUser.save()
        res.send("Added User Successfully")
    }
    catch (err) {
        res.send(err)
    }

})

router.post("/login",async(req,res)=>{
    try{
            const newLogin = await userModel.findOne({email:req.body.email})
            res.send(newLogin)
    }
    catch(err){
        res.send(err)
    }
})

module.exports = router