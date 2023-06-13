function HolaMundo () {
    return "Hola Mundo JavaScript y Node.js"
}
function HolaTu (nombre) {
    return "Hola " + nombre
}
const PI = 3.1416
let miobjeto01 = {
    minumero : 12,
    mistring : "Hola Mundo JavaScript",
    mibooleano : true,
}
////console.log(HolaMundo())
////console.log(HolaTu("Felipe"))
//console.log(module.exports)
/*
module.exports.HolaMundo = HolaMundo
module.exports.HolaTu = HolaTu
module.exports.Pi = PI
module.exports.miobjeto01 = miobjeto01
*/
module.exports = {HolaMundo : HolaMundo, HolaTu : HolaTu, Pi : PI, 
    miobjeto01 : miobjeto01}
//console.log(module.exports)