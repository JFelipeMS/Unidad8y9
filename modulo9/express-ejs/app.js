/*
npm install express
npm install ejs
*/
//cargar el paquete o modulo express
const express = require('express')
const server = express()
//definir la carpeta de ejs
server.set('view engine', 'ejs')

var pestaña = "Inicio"
var mensaje01 = "Hola Mundo JavaScript, Node.js, Express y EJS"

var personas = [
    {cc:9,name:'Luis',lastname:'Garcia',email:'lgarcia@udistrital.edu.co'},
    {cc:2,name:'Ana',lastname:'Avila',email:'aavila@udistrital.edu.co'},
    {cc:8,name:'Maria',lastname:'Perez',email:'mperez@udistrital.edu.co'},
    {cc:4,name:'Alejandro',lastname:'Niño',email:'aniño@udistrital.edu.co'},
    {cc:27,name:'Manuel',lastname:'Arrieta',email:'marrieta@udistrital.edu.co'}
]

// pagina de inicio
server.get ('/', (req,res) => {
    res.render('templates/index',{
        tituloindex:mensaje01,
        pestaña:pestaña,
        mispersonas:personas
    })
})
// pagina acercade
server.get ('/about', (req,res) => {
    res.render('templates/acercade',{
        titulo:"acerca de..",
        mensaje01:"estos somos nosotros, Curso BackEnd Basico"
    })
})
// pagina default
server.get ('*', (req,res) => {
    res.render('templates/error404',{
        titulo:"Error 404"
    })
})

//iniciar servidor y poner a escuchar
server.listen(8081, function(){
    console.log("servidor corriendo en el puerto 8081")
})