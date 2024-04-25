const express = require("express")
const deleteModel = require("../models/deleteModel")
const auth = require("../middleware/auth")

const router = express.Router()

router.post("/delete",auth, async (req, res) => {
    try {
        const deletedMessage = new deleteModel(req.body)
        await deletedMessage.save()
        res.send(deletedMessage)
    }
    catch (err) {
        res.send(err)
    }

})

router.get("/getting-delete",auth, async (req, res) => {
    try {
        const Message = await deleteModel.find()
        res.send(Message)
    }
    catch (err) {
        res.send(err)
    }

})


router.post("/delete-delete",auth, async (req, res) => {
    try {
       const newDelete= await deleteModel.findOneAndDelete({ _id: req.body.id })
       newDelete? res.send("Deleted SuccessFully"):res.send("Not Exists")
    }
    catch (err) {
        res.send(err)
    }
})

router.post("/multiple-delete",auth, async (req, res) => {
    try {
        const newDelete = await deleteModel.deleteMany(req.body)
        newDelete ? res.send("Deleted SuccessFully") : res.send("Not Exists")
    }
    catch (err) {
        res.send(err)
    }
})

module.exports = router