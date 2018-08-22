const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');



app.use( express.static(  __dirname + '/public' ) );

// Express HBS engine
hbs.registerPartials( __dirname + '/views/partials' );
app.set('view engine', 'hbs');
 
app.get('/', (req, res) => {
  
    res.render('home', {
        nombre: 'Gabriel'
    });

});

app.get('/about', (req, res) => {
  
    res.render('about');

});

// Listen genera el servidor y establece su puerto como primer parametro, y una funcion
// En este caso podemos hacer un log para enterarnos si esta escuchando...
app.listen(3000, () => console.log('Escuchando peticiones en el puerto 3000'));