const express = require('express')
const app = express()

const bcrypt = require('bcryptjs')
const _ = require('underscore')

const Categoria = require('../models/categoria')
const { verifyToken, verifyAdminRole } = require('../middlewares/authentication')


// Mostrar todas las categorias
app.get('/categoria', (req, res) => {

    Categoria.
    find().
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
app.get('/categoria/:id', (req, res) => {

    let _id = req.params.id

    Categoria.
    find({ _id }).
    exec((err, categoria) => {

        if (err) {
            
            return res.json({
                ok: false,
                err
            })

        }

        return res.json({
            ok: true,
            categoria
        })

    })
    
})


// POST (Guardar nuevo)
app.post('/categoria', [verifyToken, verifyAdminRole], (req, res) => {

    


})


// PUT (Actualizar)
app.put('/categoria/:id', [verifyToken, verifyAdminRole], (req, res) => {

    


})


// DELETE
app.delete('/categoria/:id', [verifyToken, verifyAdminRole], (req, res) => {

   
})




module.exports = app;