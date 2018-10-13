

const express = require('express')
const app = express()

const { verifyToken } = require('./../middlewares/authentication')

const Producto = require('./../models/producto')



// Obtener todos los productos
app.get('/productos', verifyToken, (req, res) => {

    // populate: usuarios y categoria
    // paginado

    let from = req.params.from || 0
    let to = req.params.to || 5
    
    Producto.
    find().
    sort('nombre').
    populate('usuario', 'nombre email').
    populate('categoria', 'descripcion').
    skip(from).
    limit(to).
    exec(( err, productos ) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        return res.json({
            ok: true,
            productos
        })

    })

})

// Obtener producto por ID
app.get('/productos/:id', (req, res) => {

    // populate: usuarios y categoria

    let _id = req.params.id

    Producto.
    find({ _id }).
    sort('nombre').
    populate('usuario', 'nombre email').
    populate('categoria', 'descripcion').
    exec(( err, productos ) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        return res.json({
            ok: true,
            productos
        })

    })

})

app.post('/productos', verifyToken, (req, res) => {

    let body = req.body

    let producto = new Producto({

        nombre: body.nombre,
        precioUni: body.precioUni,
        descripcion: body.descripcion,
        categoria: body.categoria,
        usuario: req.usuario._id

    })

    producto.
    save(( err, productoDB ) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        return res.status(201).json({
            ok: true,
            producto: productoDB
        })

    })

})

app.put('/productos/:id', (req, res) => {

    let _id = req.params.id
    let body = req.body

    Producto.
    findOneAndUpdate({ _id }, body, { new: true }, (err, productoDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if (!productoDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }
            })
        }

        return res.json({
            ok: true,
            producto: productoDB
        })


    })

})

app.delete('/productos/:id', (req, res) => {

    let _id = req.params.id

    Producto.
    findOneAndUpdate({ _id }, { 'disponible': false }, (err, productoDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        return res.json({
            ok: true,
            productoDB
        })

    })

})








module.exports = app
