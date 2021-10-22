import axios from "axios";
const key = process.env.REACT_APP_API_KEY;

export const searchWeather = (e, city, unit) => {
    e.preventDefault();
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`)
    .then(({data})=>{
        console.log('data from helper: ', data);
    }).catch((err) => {
        console.error(err.message);
    });
};
