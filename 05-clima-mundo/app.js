
const lugar = require('./lugar/lugar');
const argv = require('./config/yargs').argv;


lugar.getLugarLatLng(argv.direccion)
  .then(resp => {
    console.log(resp);
  })
  .catch(e => console.log(e));
