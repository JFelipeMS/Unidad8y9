const express = require('express')
const path = require('path')
const server = express()

//ruta de los archivos estaticos
server.use(express.static(path.join(__dirname,'archivos')))

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
server.get("/datosPersona",(req,res) => {
    const datos = {
        nombre: 'Alejandra',
        edad: 27,
        profesion: 'Desarrollador BackEnd'
    }
    res.json(datos)
})
server.get("*",(req,res) => {
    res.send("<h1>Error 404 - Pagina no encontrada</h1>")
})
