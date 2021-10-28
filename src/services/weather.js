import axios from "axios";
const KEY = process.env.REACT_APP_API_KEY;

const getCityWeather = (city, unit) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${KEY}`)
};

export default getCityWeather;
