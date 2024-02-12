const express = require("express")
const userModel = require("../models/userModel")
const genPassword = require("../helper.js")
const bcrypt = require("bcrypt")
const router = express.Router()

router.post("/password", async (req, res) => {
    try {
        const { password, email, firstname, lastname, day, month, year } = req.body
        const isUserExists = await userModel.findOne({ email: email })
        if (isUserExists) {
            res.send("Email Already Exists")
            return;
        }
        if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#$%_&]).{8,}$/g.test(password)) {
            res.status(400).send({ message: "Password pattern does not match" })
            return;
        }
        const hashedPassword = await genPassword(password)
        let newUser = new userModel({ password: hashedPassword, email, firstname, lastname, day, month, year })
        await newUser.save()


        res.send(newUser)
    }
    catch (err) {
        res.send(err)
    }

})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body
        const newLogin = await userModel.findOne({ email: req.body.email })
        if (newLogin) {
            const storedDbPassword = newLogin.password;
            const isPasswordMatch = await bcrypt.compare(password, storedDbPassword)
            if (!isPasswordMatch) {
                res.status(400).send({ message: "Invalid Credentials" })
                return;
            }

            res.send({message:"Login Successfull"})

        }
        else {
            res.send({ message: "Invalid Credentials" })
            return
        }
    }
    catch (err) {
        res.send(err)
    }
})

module.exports = router