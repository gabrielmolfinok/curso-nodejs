const axios = require('axios');


const getLugarLatLng = async(direccion) => {

  let encodedUrl = encodeURI(direccion);

  let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyCBo4j11okWrlGNF0zjFCAgCD-kLYU3B0o`)

  if (resp.data.status === 'ZERO_RESULTS') {
    throw new Error(`No hay resultados para la ciudad ${direccion}`)
  }

  let location = resp.data.results[0],
      coords = location.geometry.location;

  return {
    direccion: location.formatted_address,
    lat: coords.lat,
    lng: coords.lng
  }

}

module.exports = {
  getLugarLatLng
}
