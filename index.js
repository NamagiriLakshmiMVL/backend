const express = require("express")
const mongoose = require("mongoose")
const signupRoute = require("./routes/signupRoute")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()


const app = express()
app.use(cors())
const PORT = process.env.PORT
app.use(express.json())

app.use("/creating-user",signupRoute)

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Mongoose is Connected")
    app.listen(PORT,()=>console.log("Server is Connected on the PORT",PORT))
})
.catch((err)=>{console.log(err)})
