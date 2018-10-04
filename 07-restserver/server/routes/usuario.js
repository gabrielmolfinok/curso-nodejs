const express = require('express')
const app = express()

const bcrypt = require('bcryptjs')
const _ = require('underscore')

const Usuario = require('../models/usuario')
const { verifyToken } = require('../middlewares/authentication')


// GET
app.get('/usuario', verifyToken, (req, res) => {

    return res.json({
        usuario: req.usuario,
        nombre: req.usuario.nombre,
        email: req.usuario.email
    })

    let from = Number(req.query.from) || 0
    let to = Number(req.query.to) || 5
    
    Usuario.find({ estado: true }, 'nombre email role estado google img')
            .skip(from)
            .limit(to)
            .exec( (err, usuarios) => {

                if (err) {
                    return res.status(400).json({
                        ok: false,
                        err
                    })
                }

                Usuario.count({ estado: true }, (err, count) => {

                    res.json({
                        ok: true,
                        usuarios,
                        count
                    })

                } )

                
            })
    
})


// POST (Guardar nuevo)
app.post('/usuario', verifyToken, (req, res) => {

    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync( body.password, 10 ),
        role: body.role
    })

    usuario.save( (err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({ 
            ok: true,
            usuario: usuarioDB
        })


    })


})


// PUT (Actualizar)
app.put('/usuario/:id', verifyToken, (req, res) => {

    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']);

    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {
        
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        })

    })


})


// DELETE
app.delete('/usuario/:id', verifyToken, (req, res) => {

    let id = req.params.id
    let stateChange = {
        estado: false
    }

    // BORRADO LOGICO
    Usuario.findByIdAndUpdate(id, stateChange, { new: true }, (err, usuarioDB) => {
        
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        
        res.json({
            ok: true,
            usuario: usuarioDB
        })
        
    })
    
    // BORRADO FISICO
    // Usuario.findByIdAndRemove(id, (err, deletedUser) => {

    //     if (err) {
    //         return res.status(400).json({
    //             ok: false,
    //             err
    //         })
    //     }

    //     if (!deletedUser) {
    //         return res.status(400).json({
    //             ok: false,
    //             err: {
    //                 message: 'Usuario no encontrado'
    //             }
    //         })
    //     }

    //     res.json({
    //         ok: true,
    //         usuario: deletedUser
    //     })

    // })

})




module.exports = app;