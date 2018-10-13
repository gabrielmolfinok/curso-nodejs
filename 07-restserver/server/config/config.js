// ==================
// Puerto
// ==================

process.env.PORT = process.env.PORT || 3000;



// ==================
// Entorno
// ==================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'


// ==================
// Vencimiento del Token
// ==================
// 60 segundos 60 minutos 24 horas 30 dias
process.env.CADUCIDAD_TOKEN = '48h'


// ==================
// SEED de autenticacion
// ==================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'


// ==================
// Base de Datos
// ==================
let urlDB

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URI
}

// Forzar conexion a mLab...
// urlDB = process.env.MONGO_URI

process.env.URLDB = urlDB


// ==================
// Google CLIENT ID
// ==================
process.env.CLIENT_ID = process.env.CLIENT_ID || '98534655046-nvtoeb8t711k4ju4l2hf6cpjv40r8v8b.apps.googleusercontent.com'