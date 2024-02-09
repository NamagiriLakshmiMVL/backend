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

module.exports = router