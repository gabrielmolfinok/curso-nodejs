

require('./config/config');

const express = require('express')
const app = express()
const path = require('path')

const mongoose = require('mongoose')


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Habilitar PUBLIC folder
app.use(express.static( path.resolve( __dirname, '../public') ))


// Rutas
app.use(require('./routes/index'))


// Mongoose
mongoose.connect(process.env.URLDB, { useNewUrlParser: true}, (err, res) => {

    if ( err ) throw err;

    console.log('Base de datos ONLINE')

})


// Escucha del puerto
app.listen( process.env.PORT, () => console.log("Escuchando puerto: ", 3000) )