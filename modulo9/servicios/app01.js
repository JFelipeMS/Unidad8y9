const http = require('http')

http.createServer((req,res) => {
    res.end("Hola Mundo Node.js y http")
}).listen(8081,() => {console.log("Servidor Iniciado puerto 8081")})