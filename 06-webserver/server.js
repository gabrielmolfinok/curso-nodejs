const express = require('express');
const app = express();

app.use( express.static(  __dirname + '/public' ) );
 
// app.get('/', (req, res) => {
  
//     let salida = {
//         nombre: 'Gabriel',
//         edad: 20,
//         url: req.url
//     }

//     res.send(salida);

// });
 
app.listen(3000, () => console.log('Escuchando peticiones en el puerto 3000'));