
// Comando para establecer la conexión
var socket = io()

var label = $('#lblNuevoTicket')

socket.on('connect', () => {

    console.log('Conectado al servidor')

})

socket.on('disconnect', () => {

    console.log('Desconectado al servidor')

})

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket){

        label.text(siguienteTicket)

    })

})