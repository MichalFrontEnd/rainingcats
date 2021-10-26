import axios from "axios";
const key = process.env.REACT_APP_API_KEY;

const gethWeather = (e, city, unit, res) => {
    e.preventDefault();
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`)
    .then(({data})=>{
        console.log('data from helper: ', data);
        res = data;
        console.log('res in helper: ', res);
        return res
    }).catch((err) => {
        console.error(err.message);
    });
};

export default gethWeather;
