import React, { useEffect, useState } from "react";

import Search from "../../components/Search";
import History from "../../components/History";
import InfoCard from "../../components/InfoCard";
import UnitButtons from "../../components/UnitButtons";
import getCityWeather from "../../services/weather"
import useInterval from "../../hooks/useInterval";

const Base = () => {
    const [resList, setResList] = useState([]);
    const [error, setError] = useState("");
    const [currentCity, setCurrentCity] = useState(JSON.parse(sessionStorage.getItem("weatherData"))|| null);
    //let current=resList[0] || null;
    

    //Add useEffect to get user's location and display the weather there?
    //have fallback plan if requires approval from user -> random city?
    useEffect(() => {
        if (sessionStorage.weatherData) {
            let sessionData = [JSON.parse(sessionStorage.getItem("weatherData")), ...resList]; 
            setResList(sessionData);
        }
    }, []);


//      useInterval(() => {

//    if (sessionStorage.weatherData) {
//        getCityWeather(sessionStorage.getItem("city"), sessionStorage.getItem("unit")).then(({data})=>{
//                console.log('data: ', data);
//                //let stateCopy = [data, ...resList.slice(1, resList.length)];

//                //setResList(stateCopy);
//                setCurrentCity(data)
//        }).catch((err) => {
//            console.log(err.message)
//            setError(err.message)
//        })
//    }
//  }, 10000);

    const handleSearch=(formData)=>{
        setError("");
        const city = formData.city.value;
        const unit = formData.unit.value;

        getCityWeather(city, unit).then(({data})=>{
            //add city to the history list
                let stateCopy = [data, ...resList];
                setResList(stateCopy);
                sessionStorage.setItem("weatherData", JSON.stringify(data));
                sessionStorage.setItem("unit", unit)
                sessionStorage.setItem("city", city)
                setCurrentCity(data)
            })
            .catch((err) => {
                console.error(err.message);
                setError(err.message)
            })
    }
    
    const handleCurrent=(i)=>{
        setCurrentCity(resList[i]);
        sessionStorage.setItem("city", resList[i].name)
    }

    return (
        <>
            <Search onSearch={handleSearch} />
            {error && (
                <div>{error}</div>
            )} 

            {resList[0] && (
                <>
                    <UnitButtons onUnitSelect={handleSearch} />
                    <InfoCard results={currentCity} />
                    <History resList={resList} onHistorySelect={handleCurrent} />
                </>
            )}
        </>
    );
};

export default Base;
