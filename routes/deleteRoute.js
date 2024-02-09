const express = require("express")
const deleteModel = require("../models/deleteModel")

const router = express.Router()

router.post("/delete", async (req, res) => {
    try {
        const deletedMessage = new deleteModel(req.body)
        await deletedMessage.save()
        res.send(deletedMessage)
    }
    catch (err) {
        res.send(err)
    }

})

router.get("/getting-delete", async (req, res) => {
    try {
        const Message = await deleteModel.find()
        res.send(Message)
    }
    catch (err) {
        res.send(err)
    }

})

module.exports = router