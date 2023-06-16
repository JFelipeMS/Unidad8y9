const express = require('express')
const server = express()

server.listen(8081, function(){
    console.log('servicio funcionando http://localhost:8081')
})

function inicio(req,res){
    res.send("<h1>Hola Mundo Express y Node.js (callback)</h1>")
}
//Rutas
server.get("/",inicio)
server.get("/index.html",inicio)
server.get("/acercade",(req,res) => {
    res.send("<h1>Curso BackEnd Basico</h1>")
})
server.get("*",(req,res) => {
    res.send("<h1>Error 404 - Pagina no encontrada</h1>")
})