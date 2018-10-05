
const jwt = require('jsonwebtoken')

// ===================
// Verificar Token
// ===================

let verifyToken = (req, res, next) => {

    let token = req.get('token')

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no valido'
                }
            })
        }

        req.usuario = decoded.usuario

        next()

    })


}


// ===================
// Verificar AdminRole
// ===================

let verifyAdminRole = (req, res, next) => {

    let usuario = req.usuario

    if (usuario.role === 'USER_ROLE') {
        return res.json({
            ok: false,
            err: {
                message: 'No tiene los permisos suficientes'
            }
        })
    }

    next()

}


module.exports = { verifyToken, verifyAdminRole }