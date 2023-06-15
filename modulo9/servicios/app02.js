const http = require('http')

const server = http.createServer((req,res) => {
    console.log("-------Request-------")
    //console.log(req)
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
    console.log("-------Response-------")
    //console.log(res)
    console.log(res.statusCode)
    res.statusCode = 404
    res.write("<h1>Hola Mundo Node.js y http</h1>")
    res.end()
})
const PUERTO = process.env.PORT || 8081
server.listen(PUERTO,() => {console.log("Servidor Iniciado puerto "+PUERTO)})