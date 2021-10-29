import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'

import './infocard.css'


import UnitButtons from "../UnitButtons";
import getCityWeather from "../../services/weather";

const InfoCard = (props) => {
    const [values, setValues] = useState({
        main: "",
        name: "",
        weather: "",
        wind: "",
    });
    const [unit, setUnit] = useState("");

    //use unit from props to determine temperature symbol
    useEffect(() => {
        if (props.results) {
            setValues({
                main: props.results.main,
                name: props.results.name,
                weather: props.results.weather[0],
                wind: props.results.wind,
            });
        }
        if (props.unit) {
            setUnit(props.unit);
        }
    }, [props]);

    //Querying API for the chosen unit, and updating state
    const handleUnit = (selectedUnit) => {
        getCityWeather(values.name, selectedUnit)
            .then(({ data }) => {
                let stateCopy = { ...values };
                stateCopy.main = data.main;
                setValues(stateCopy);
                setUnit(selectedUnit);
                sessionStorage.setItem("unit", selectedUnit);
            })
            .catch((err) => {
                console.error(err.message);
            });
    };

    return (
        <div className="info-card-container h-50">
            {props.results && (
                <div className="info-card pt-2 pb-2 ps-3 m-1" id={values.weather.main}>
                    <h2 className="info-card-header fs-3 mb-0 p-0 mt-1">Weather forecast for {values.name}</h2>
                    <img className="info-image" src={`http://openweathermap.org/img/wn/${values.weather.icon}@4x.png`} alt={values.weather.main} />
                    <UnitButtons  onUnitSelect={handleUnit} unit={unit} />
                    <h3>{values.weather.main}</h3>
                    <Table borderless size="sm" className="fs-6">
                        <tbody>
                            <tr>
                                <td>Temperature</td>
                                <td>
                                    {values.main.temp}
                                    {unit === "imperial" ? " ℉" : " ℃"}
                                </td>
                            </tr>
                            <tr>
                                <td>Feels Like</td>
                                <td>
                                    {values.main.feels_like}
                                    {unit === "metric" ? " ℃" : " ℉"}
                                </td>
                            </tr>
                            <tr>
                                <td>Lowest</td>
                                <td>
                                    {values.main.temp_min}
                                    {unit === "imperial" ? " ℉" : " ℃"}
                                </td>
                            </tr>
                            <tr>
                                <td>Highest</td>
                                <td>
                                    {values.main.temp_max}
                                    {unit === "imperial" ? " ℉" : " ℃"}
                                </td>
                            </tr>
                            <tr>
                                <td>Humidity</td>
                                <td>{values.main.humidity} %</td>
                            </tr>
                            <tr>
                                <td>Wind</td>
                                <td>
                                    {values.wind.speed}
                                    {unit === "imperial" ? " mph" : " m/s"}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            )}
        </div>
    );
};

export default InfoCard;
