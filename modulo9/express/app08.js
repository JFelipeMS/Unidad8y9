const express = require('express')
const path = require('path')
const server = express()

server.listen(8081, function(){
    console.log('servicio funcionando http://localhost:8081')
})

//Rutas
server.get("/",(req,res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname,'/app08.html'))
})
server.get("/acercade",(req,res) => {
    res.send("<h1>Curso BackEnd Basico</h1>")
})
server.get("*",(req,res) => {
    res.send("<h1>Error 404 - Pagina no encontrada</h1>")
})