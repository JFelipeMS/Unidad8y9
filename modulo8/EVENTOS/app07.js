const EventEmitter = require('events')
const emisorEventos01 = new EventEmitter()
const emisorEventos02 = new EventEmitter()


emisorEventos01.on('HolaEvento', function(){
    console.log("Hola Mundo node.js y Eventos")
})
emisorEventos02.on("Saludar",(nombre) => {
    console.log("Hola " + nombre)
})

emisorEventos01.emit('HolaEvento')
emisorEventos02.emit('Saludar',"Camila")