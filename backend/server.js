const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config();

const authRoutes = require("./routes/authRoutes")

const app=express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("connected to database"))
.catch((err)=>console.log(err))

app.use("/api",authRoutes )

app.listen(5000,()=> {
    console.log("Server running sucessfully.")
})