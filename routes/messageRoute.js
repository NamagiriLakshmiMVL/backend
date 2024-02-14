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
        const getMessage = await messageModel.find({ to: req.body.items })
        res.send(getMessage)
    }
    catch (err) {
        res.send(err)
    }
})

router.post("/search-msg", async (req, res) => {
    try {
        // const getMessage = await messageModel.find({message:req.body.items} || {subject:req.body.items})
        console.log("getMessage");
        const result = await messageModel.aggregate().search({
            text: {
                query: "Sample",
                path: 'message'
            }
        });
        console.log(result);
        res.send(result)
    }
    catch (err) {
        res.send(err)
    }
})


router.post("/getting-sent", async (req, res) => {
    try {
        const send = await messageModel.find({ from: req.body.data })
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