const axios = require('axios');
require('dotenv').config()

const WEATHER_API = process.env.WEATHER_API;

async function getWeatherData(cityName){
    let text_responce = "There's an error fetching the data for the city, check the spelling or try again later"
    try {
        let weather_data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${WEATHER_API}&units=metric`);
        console.log(weather_data)
        let temperature = weather_data.data.main.temp;
        let country = weather_data.data.sys.country;
        text_responce = `Temperature in ${cityName}, ${country} is ${temperature} celsius`
        return text_responce;
    } catch (error) {
        console.error(error);
    }return text_responce;
}

module.exports = getWeatherData;