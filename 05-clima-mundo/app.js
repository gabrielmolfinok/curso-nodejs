
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('./config/yargs').argv;

let getInfo = async direccion => {

  try {
    
    let coords = await lugar.getLugarLatLng(direccion);
  
    let temp = await clima.getClima(coords.lat, coords.lon);
  
    return `El clima en ${coords.direccion} es de ${temp}ºC`;

  } catch (e) {

    return `No se pudo determinar el clima en ${ direccion }`;
    
  }

}

getInfo(argv.direccion)
  .then(mensaje => console.log(mensaje))
  .catch(e => console.log(e));
