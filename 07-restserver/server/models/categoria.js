

const mongoose = require('mongoose')

let Schema = mongoose.Schema

let categoriaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    active: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Categoria', categoriaSchema)
