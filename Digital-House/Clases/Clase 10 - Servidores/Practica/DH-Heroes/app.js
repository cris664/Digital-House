const express = require("express")
const app = express()
const path = require('path')
app.use(express.static('public'));
app.listen(3030,()=>{
    console.log("Levantando servidor")
})
app.get('/',(req,res)=>{
    //console.log("Mando index.html")
    res.sendFile(path.join(__dirname,"./views/index.html"))
})
app.get('/babbage',(req,res)=>{
    //console.log("Mando babbage.html")
    res.sendFile(path.join(__dirname,"./views/babbage.html"))
})
app.get('/berners-lee',(req,res)=>{
    //console.log("Mando berners-lee.html")
    res.sendFile(path.join(__dirname,"./views/berners-lee.html"))
})
app.get('/clarke',(req,res)=>{
    //console.log("Mando clarke.html")
    res.sendFile(path.join(__dirname,"./views/clarke.html"))
})
app.get('/hamilton',(req,res)=>{
    //console.log("Mando hamilton.html")
    res.sendFile(path.join(__dirname,"./views/hamilton.html"))
})
app.get('/hopper',(req,res)=>{
    //console.log("Mando hopper.html")
    res.sendFile(path.join(__dirname,"./views/hopper.html"))
})
app.get('/lovelace',(req,res)=>{
    //console.log("Mando lovelace.html")
    res.sendFile(path.join(__dirname,"./views/lovelace.html"))
})
app.get('/turing',(req,res)=>{
    //console.log("Mando turing.html")
    res.sendFile(path.join(__dirname,"./views/turing.html"))
})
