const express = require('express')
const app = express()

const bcrypt = require('bcryptjs')
const _ = require('underscore')

const Categoria = require('../models/categoria')
const { verifyToken, verifyAdminRole } = require('../middlewares/authentication')


// Mostrar todas las categorias
app.get('/categoria', verifyToken, (req, res) => {

    Categoria.
    find().
    sort('descripcion').
    populate('usuario', 'nombre email').
    exec((err, categorias) => {

        if (err) {
            
            return res.json({
                ok: false,
                err
            })

        }

        return res.json({
            ok: true,
            categorias
        })

    })
    
})

// Mostrar categoria por ID
app.get('/categoria/:id', verifyToken, (req, res) => {

    let id = req.params.id

    Categoria.
    findById( id ).
    exec((err, categoriaDB) => {

        if (err) {
            
            return res.json({
                ok: false,
                err
            })

        }

        if (!categoriaDB) {
            return res.json({
                ok: false,
                err: {
                    message: 'El ID no es correcto'
                }
            })
        }

        return res.json({
            ok: true,
            categoria: categoriaDB
        })

    })
    
})


// POST (Guardar nuevo)
app.post('/categoria', verifyToken, (req, res) => {

    
    let body = req.body

    let categoria = new Categoria({
        descripcion: body.descripcion,
        usuario: req.usuario._id
    })

    categoria.
    save((err, categoriaDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            categoria: categoriaDB
        })

    })


})


// PUT (Actualizar)
app.put('/categoria/:id', verifyToken, (req, res) => {

    let id = req.params.id
    let body = req.body

    let descCategoria = {
        descripcion: body.descripcion
    }

    Categoria.
    findByIdAndUpdate( id, descCategoria, { new: true, runValidators: true }, (err, categoriaDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            categoria: categoriaDB
        })

    })    


})


// DELETE
app.delete('/categoria/:id', [verifyToken, verifyAdminRole], (req, res) => {


    let id = req.params.id

    Categoria.
    findByIdAndRemove( id, (err, categoriaDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }
            })
        }

        res.json({
            ok: true,
            message: 'Categoria borrada'
        })
        
    })

   
})




module.exports = app;