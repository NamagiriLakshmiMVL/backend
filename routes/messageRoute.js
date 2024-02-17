const express = require("express")
const messageModel = require("../models/messageModel")

const router = express.Router()

router.post("/sent", async (req, res) => {
    try {
        const newMessage = new messageModel(req.body)
        await newMessage.save()
        res.send("Message Sent Successfully")
    }
    catch (err) {
        res.send(err)
    }

})


router.post("/getting-msg", async (req, res) => {
    try {
        const getMessage = await messageModel.find({ $and: [{ to: req.body.items }, { subject: { $regex: req.body.data } }] })
        res.send(getMessage)
    }
    catch (err) {
        res.send(err)
    }
})

router.post("/getting-sent", async (req, res) => {
    try {
        const send = await messageModel.find({ $and: [{ from: req.body.items }, { subject: { $regex: req.body.data } }] })
        res.send(send)
    }
    catch (err) {
        res.send(err)
    }
})

router.post("/deleting-msg", async (req, res) => {
    try {
        const newDelete = await messageModel.findOneAndDelete({ _id: req.body.id })
        newDelete ? res.send("Deleted SuccessFully") : res.send("Not Exists")
    }
    catch (err) {
        res.send(err)
    }
})

router.post("/multiple-delete", async (req, res) => {
    try {
        const newDelete = await messageModel.deleteMany(req.body)
        newDelete ? res.send("Deleted SuccessFully") : res.send("Not Exists")
    }
    catch (err) {
        res.send(err)
    }
})


router.post("/getting-star", async (req, res) => {
    try {
        const send = await messageModel.find({ _id: req.body.id })
        res.send(send)
    }
    catch (err) {
        res.send(err)
    }
})
router.post("/deleting-star", async (req, res) => {
    try {
        const send = await messageModel.find({ _id: req.body.id })
        res.send(send)
    }
    catch (err) {
        res.send(err)
    }
})




module.exports = router