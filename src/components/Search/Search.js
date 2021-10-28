import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useInterval from '../../hooks/useInterval'

const Search = ({onSearch}) => {
    //const key = process.env.REACT_APP_API_KEY;
    const [city, setCity] = useState("");
    const [unit, setUnit] = useState("metric");
    //const [error, setError] = useState(false);
    //const {unit: [unit, setUnit],
    //}={
    //    unit: useState("metric"),
    //    ...(props.state || {})
    //} 
    //const {
    //    resList: [resList, setResList],
    //} = {
    //    resList: useState([]),
    //    ...(props.state || {}),
    //};

    let stateCopy;


//  useInterval(() => {
//    // Your custom logic here
//    if (sessionStorage.city) {
//        searchWeather()
//        console.log("searching")
//    }
//  }, 10000);



    //const searchWeather = (e) => {
    //    e&& e.preventDefault();
    //    axios
    //        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`)
    //        .then(({ data }) => {
    //            //add city to the history list
    //            stateCopy = [data, ...resList];
    //            setResList(stateCopy);
    //            sessionStorage.setItem("city", JSON.stringify(data));
    //        })
    //        .catch((err) => {
    //            console.error(err.message);
    //            console.log('err.code: ', err);
    //            if (err.code === 404) {
    //                setError(true);
    //                console.log("Sum Ting Wong")
    //            }
    //        });
    //    setCity("")

    //};


    return (
        <div className="search">
            <form onSubmit={(e)=>{
                e.preventDefault();
                onSearch(e.target)
                setCity("")
            }}>
                <input type="text" name="city" value={city} onInput={(e) => setCity(e.target.value)} placeholder="Type a city here"></input>
                <label>Unit</label>
                {/* unit can be changed only when there's a city input */}
                <select name="unit" value={unit} onChange={city? (e) => setUnit(e.target.value):null}>
                    <option value="metric">Metric | ℃</option>
                    <option value="imperial">Imperial | ℉</option>
                </select>
                <button type="submit" >Search</button>
            </form>
            {/*{error && (

                    <p>No results available for this search, sorry</p>

            )}*/}
        </div>
    );
};

export default Search;
