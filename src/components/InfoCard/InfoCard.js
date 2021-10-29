import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

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
        <div>
            <UnitButtons onUnitSelect={handleUnit} unit={unit} />
            {props.results && (
                <div>
                    <h2>Weather forecast for {values.name}</h2>
                    <img src={`http://openweathermap.org/img/wn/${values.weather.icon}@4x.png`} alt={values.weather.main} />
                    <h3>{values.weather.main}</h3>
                    <Table borderless size="sm">
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
