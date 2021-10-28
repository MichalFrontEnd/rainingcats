import React, { useEffect, useState } from "react";
import {Table} from 'reactstrap'
//import { Card } from '@mui/material';

const InfoCard = (props) => {
    //console.log('props on card: ', props);
    const [values, setValues] = useState({
        main: '',
        name: '',
        weather: '',
        wind:''
    })
    const [unitSymbol, setUnitSymbol] = useState("")
    const [speedUnit, setSpeedUnit] = useState("")
    

    //use unit from props to determine temp symbol
    useEffect(()=>{
        if (props.results) {
            setValues({
            main: props.results.main,
            name: props.results.name,
            weather: props.results.weather[0],
            wind: props.results.wind,
            })
        }
        if (props.unit==='imperial') {
            setUnitSymbol("℉")
            setSpeedUnit("mph")
        } else {
            setUnitSymbol("℃")
            setSpeedUnit("m/s")
        }
    }, [props])


    return (
        <div>
            {props.results && (
                <div>
                    <h2>Weather forecast for {values.name}</h2>
                    <img src={`http://openweathermap.org/img/wn/${values.weather.icon}@4x.png`} alt={values.weather.main} />
                    <h3>{values.weather.main}</h3>
                    <Table borderless size="sm">
                        <tbody>
                            <tr>
                                <td>Temperature</td>
                                <td>{values.main.temp}{unitSymbol}</td>
                            </tr>
                            <tr>
                                <td>Feels Like</td>
                                <td>{values.main.feels_like}{unitSymbol}</td>
                            </tr>
                            <tr>
                                <td>Lowest</td>
                                <td>{values.main.temp_min}{unitSymbol}</td>
                            </tr>
                            <tr>
                                <td>Highest</td>
                                <td>{values.main.temp_max}{unitSymbol}</td>
                            </tr>
                            <tr>
                                <td>Humidity</td>
                                <td>{values.main.humidity}%</td>
                            </tr>
                            <tr>
                                <td>Wind</td>
                                <td>{values.wind.speed}{speedUnit}</td>
                            </tr>
                        </tbody>
                    </Table>

                </div>
            )}
        </div>
    )
}

export default InfoCard;    