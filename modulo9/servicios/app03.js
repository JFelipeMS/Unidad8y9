const http = require('http')

const server = http.createServer((req,res) => {
    res.setHeader("content-type","application/json")
    res.writeHead(200)
    res.end('{"mensaje":"Hola Mundo","autor":"Felipe"}')
})
const PUERTO = process.env.PORT || 8081
server.listen(PUERTO,() => {
    console.log("Servidor Iniciado puerto "+PUERTO)})