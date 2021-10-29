import React, { useEffect, useState } from "react";

import Search from "../../components/Search";
import History from "../../components/History";
import InfoCard from "../../components/InfoCard";
import getCityWeather from "../../services/weather";
import useInterval from "../../hooks/useInterval";

import "./base.css";

const Base = () => {
    const [resList, setResList] = useState([]);
    const [error, setError] = useState("");
    const [currentCity, setCurrentCity] = useState(JSON.parse(sessionStorage.getItem("weatherData")) || null);
    const [currentUnit, setCurrentUnit] = useState("");

    //Check session storage for stored data (last result)
    useEffect(() => {
        if (sessionStorage.weatherData) {
            let sessionData = [JSON.parse(sessionStorage.getItem("weatherData")), ...resList];
            setResList(sessionData);
            setCurrentUnit(sessionStorage.getItem("unit"));
        }
    }, []);

    //Performs a new API call every 10 seconds
    //      useInterval(() => {
    //    if (sessionStorage.weatherData) {
    //        getCityWeather(sessionStorage.getItem("city"), sessionStorage.getItem("unit")).then(({data})=>{
    //                setCurrentCity(data)
    //        }).catch((err) => {
    //            console.log(err.message)
    //            setError("Couldn't update weather at this time, sorry")
    //        })
    //    }
    //  }, 10000);

    //Get info from form and pass to search function. Set to state and session storage.
    const handleSearch = (formData) => {
        setError("");
        console.log('formData: ', formData);
        const city = formData.city.value;
        const unit = formData.unit.value;
        setCurrentUnit(unit);

        getCityWeather(city, unit)
            .then(({ data }) => {
                //add city to the history list
                let stateCopy = [data, ...resList];
                setResList(stateCopy);
                sessionStorage.setItem("weatherData", JSON.stringify(data));
                sessionStorage.setItem("unit", unit);
                sessionStorage.setItem("city", city);
                setCurrentCity(data);
            })
            .catch((err) => {
                console.error(err.message);
                setError("There were no results to match this search, sorry");
            });
    };

    const handleCurrent = (i) => {
        setCurrentCity(resList[i]);
        sessionStorage.setItem("city", resList[i].name);
    };

    return (
        <>
            <h1 className="base-header mt-2">Raining Cats</h1>
            <Search onSearch={handleSearch} />
            {error && <div className="error-msg text-warning mb-2">{error}</div>}

            {resList[0] && (
                <>
                    <InfoCard results={currentCity} unit={currentUnit} />
                    <History resList={resList} onHistorySelect={handleCurrent} />
                </>
            )}
        </>
    );
};

export default Base;
