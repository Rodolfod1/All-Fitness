const path = require ("path")
const route = require("express").Router()

// my html routes 
route.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"../public/index.html"));
})

route.get("/exercise",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

route.get("/stats", (req,res)=>{
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})

module.exports = route;
