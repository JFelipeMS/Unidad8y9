const http = require('http')

const server = http.createServer((req,res) => {
    res.setHeader("content-type","text/html")
    res.writeHead(200)
    res.end('<html><body><h1>Mi primer Pagina web con node.js y http</h1></body></html>')
})
const PUERTO = process.env.PORT || 8081
server.listen(PUERTO,() => {
    console.log("Servidor Iniciado puerto "+PUERTO)})