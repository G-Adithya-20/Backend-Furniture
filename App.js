const mongoose = require("mongoose")
const express = require("express")
const cors = require ("cors")
const {furnituremodel} = require("./models/Furniture")
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://Adithya09:Adithya09@cluster0.nxw6u1y.mongodb.net/furnituresDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res) => {
    let input = req.body
    let Furniture = new furnituremodel(input)
    Furniture.save()
    res.json({"status":"success"})
})