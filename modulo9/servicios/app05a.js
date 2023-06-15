const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    if(req.url === "/index.html"){
        res.setHeader("content-type","text/html")
    res.writeHead(200)
    res.end('<html><body><h1>HOME</h1></body></html>')
    } else {
        fs.readFile("./app05.html","utf-8",(err, contenido) => {
            if(err){
                console.log(err)
            } else {
                res.setHeader("content-type","text/html")
                res.writeHead(200)
                res.end(contenido)
            }
        })
    }
})
const PUERTO = process.env.PORT || 8081
server.listen(PUERTO,function() {
    console.log("Servidor Iniciado puerto "+PUERTO)})