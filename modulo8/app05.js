const fs = require('fs')

fs.readFile("./arch05.json",'utf-8',(err, contenido) => {
    if(err){
        console.error(err)
    } else {
        console.log(contenido)
    }
})
fs.readFile("./arch05.json",'utf-8',function (err, contenido){
    if(err){
        console.error(err)
    } else {
        console.log(contenido)
    }
})

fs.readFile("./arch05.json",'utf-8',(err, contenido) => {
    if(err){
        throw new Error(err)
    } 
    console.log(contenido)
    console.log("sigo procesando")
})

fs.rename("./arch05.json", "mijson.xml", (err) => {
    if(err){
        throw new Error(err)
    } 
    console.log("Nombre cambiado exitosamente")
})

setTimeout(function () {
    fs.rename("./mijson.xml","arch05.json", function(err){
        if(err){
            throw new Error(err)
        } 
        console.log("Nombre cambiado exitosamente")
    })
},10000)

fs.appendFile("./arch05.txt","un texto nuevo que agregar", (err) =>{
    if(err){
        throw new Error(err)
    } 
    console.log("Archivo actualizado exitosamente")
})
fs.appendFile("./arch05a.txt","un texto nuevo que agregar", (err) =>{
    if(err){
        throw new Error(err)
    } 
    console.log("Archivo actualizado exitosamente")
})

let miobjeto01 = {
    minumero : 12,
    mistring : "Hola Mundo JavaScript",
    mibooleano : true,
}
fs.writeFile("./arch05c.txt",JSON.stringify(miobjeto01), function (err){
    if(err){
        throw new Error(err)
    } 
    console.log("Archivo actualizado exitosamente")
})
/*
fs.writeFile("./arch05c.txt","Cambia todo el texto", function (err){
    if(err){
        throw new Error(err)
    } 
    console.log("Archivo actualizado exitosamente")
})*/

fs.unlink("./arch05b.txt",function (err){
    if(err){
        //throw new Error(err)
        console.error(err)
    } 
    console.log("Archivo borrado exitosamente")
})