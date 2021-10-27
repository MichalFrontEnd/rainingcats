import React, {useEffect, useState} from 'react';

import Search from '../../components/Search';
import History from '../../components/History';
import InfoCard from '../../components/InfoCard';
import UnitButtons from '../../components/UnitButtons';

const Base = () => {
    const [resList, setResList] = useState([]);
    const [unit, setUnit] = useState("metric");
    const [current, setCurrent] = useState("");
    //const [temp, setTemp] =useState("")

    //Add useEffect to get user's location and display the weather there.
    //have fallback plan if requires approval from user -> random city?
    useEffect(()=> {
        if (sessionStorage.city) {
            console.log("There's some history here..")
            let copy= [JSON.parse(sessionStorage.getItem("city")), ...resList]
            setResList(copy)
        }

    },[])

    if (current) {
        sessionStorage.setItem("city", JSON.stringify(current))
    }
    console.log('current on base: ', current);
    console.log('resList: ', resList);

    return (
        <>
            <Search state={{resList: [resList, setResList], unit: [unit, setUnit], current: [current, setCurrent]}}/>

            {resList[0] && (
                <>
                    <UnitButtons results={resList[0]} unit={unit}/>
                    <InfoCard results={resList[0]} unit={unit}/>
                    <History results={resList}/>
                </>
                )
            }

            
        </>
    )
}

export default Base;