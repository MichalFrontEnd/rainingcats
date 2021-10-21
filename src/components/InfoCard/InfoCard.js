import React from "react";
import {Table} from 'reactstrap'
//import { Card } from '@mui/material';

const InfoCard = (props) => {
    console.log('props on card: ', props);

    let main, name, weather, wind;

    if (props.results) {
        main = props.results.main;
        name = props.results.name;
        weather = props.results.weather[0];
        wind = props.results.wind;
    } 




    return (
        <div>
            {props.results && (
                <div>
                    <h2>Weather forecast for {name}</h2>
                    <img src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`} alt={weather.main} />
                    <h3>{weather.main}</h3>
                    <Table borderless size="sm">
                        <tr>
                            <td>Temperature</td>
                            <td>{main.temp}</td>
                        </tr>
                        <tr>
                            <td>Feels Like</td>
                            <td>{main.feels_like}</td>
                        </tr>
                        <tr>
                            <td>Lowest</td>
                            <td>{main.temp_min}</td>
                        </tr>
                        <tr>
                            <td>Highest</td>
                            <td>{main.temp_max}</td>
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>{main.humidity}%</td>
                        </tr>
                    </Table>

                </div>
            )}
        </div>
    )
}

export default InfoCard;    