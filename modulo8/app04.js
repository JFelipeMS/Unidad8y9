function HolaTu(nombre){
    console.log("Hola "+ nombre)
}
function HolaTuLeng(nombre, lenguaje){
    console.log("Hola "+ nombre + " ,Lenguaje: " + lenguaje)
}
function Segundos(x){
    console.log("paso "+ x + " segundos")
}
setImmediate(HolaTuLeng,"Camila","Python") //se ejecuta despues de terminar los procesos sincronos
setTimeout(HolaTuLeng,5000,"Luisa","JavaScript")
setTimeout(HolaTu,3000,"Felipe")
HolaTu("Javier")
setInterval(Segundos,2000,"2")