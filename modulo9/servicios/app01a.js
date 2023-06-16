const http = require('http')

const server = http.createServer((req,res) => {
    res.end("Hola Mundo Node.js y http")
})
const PUERTO = process.env.PORT || 8081
server.listen(PUERTO,() => {
    console.log("Servidor Iniciado puerto "+PUERTO)})