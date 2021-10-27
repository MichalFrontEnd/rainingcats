import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Search = (props) => {
    const key = process.env.REACT_APP_API_KEY;
    const [city, setCity] = useState("");
    const {current: [current, setCurrent],
    }={
        current: useState(""),
        ...(props.state || {})
    } 
    const {unit: [unit, setUnit],
    }={
        unit: useState("metric"),
        ...(props.state || {})
    } 
    const {
        resList: [resList, setResList],
    } = {
        resList: useState([]),
        ...(props.state || {}),
    };

    let stateCopy;

    const searchWeather = (e) => {
        e.preventDefault();
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`)
            .then(({ data }) => {
                //add city to the history list
                stateCopy = [data, ...resList];
                setResList(stateCopy);
setCurrent(JSON.parse(sessionStorage.getItem("city")));
            })
            .catch((err) => {
                console.error(err.message);
            });
        setCity("")

    };
    //console.log('resList[0]: ', resList[0]);

    return (
        <div className="search">
            <form>
                <input type="text" name="search" value={city} onInput={(e) => setCity(e.target.value)} placeholder="Type a city here"></input>
                <label>Unit</label>
                {/* unit can be changed only when there's a city input */}
                <select value={unit} onChange={city? (e) => setUnit(e.target.value):null}>
                    <option value="metric">Metric | ℃</option>
                    <option value="imperial">Imperial | ℉</option>
                </select>
                <button onClick={(e) => searchWeather(e)}>Search</button>
            </form>
        </div>
    );
};

export default Search;
