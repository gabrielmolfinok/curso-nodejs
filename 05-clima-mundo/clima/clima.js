const axios = require('axios');

const getClima = async(lat, lon) => {

    let appid = '9f9bf20d2777bf64d19e49f0563b03cf';

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${appid}`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}