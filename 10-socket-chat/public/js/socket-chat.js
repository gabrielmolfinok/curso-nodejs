var socket = io()

var params = new URLSearchParams( window.location.search )

if ( !params.has('nombre') || !params.has('sala') ) {

    window.location = 'index.html'
    throw new Error('El nombre y sala son necesario')

}

var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
}

// Escuchar la conexion
socket.on('connect', function() {

    console.log('Conectado al servidor')
    socket.emit('entrarChat', usuario, function(resp){ renderizarUsuarios(resp) })

})

// Escuchar la desconexion
socket.on('disconnect', function() { console.log('Perdimos conexión con el servidor') })

// Escuchar información
socket.on('crearMensaje', function(mensaje) { renderizarMensajes(mensaje, false) })

// Escuchar cambios de usuarios (Usuario entra o sale del chat)
socket.on('listaPersona', function(personas) { renderizarUsuarios( personas ) })


// Mensajes privados
socket.on('mensajePrivado', function(mensaje) { console.log('Mensaje privado: ', mensaje) })
