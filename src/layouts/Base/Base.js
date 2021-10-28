import React, {useEffect, useState} from 'react';

import Search from '../../components/Search';
import History from '../../components/History';
import InfoCard from '../../components/InfoCard';
import UnitButtons from '../../components/UnitButtons';

const Base = () => {
    const [resList, setResList] = useState([]);
    const [unit, setUnit] = useState("metric");
    const [current, setCurrent] = useState("");

    //Add useEffect to get user's location and display the weather there.
    //have fallback plan if requires approval from user -> random city?
    useEffect(()=> {
        if (sessionStorage.city) {
            let copy = [JSON.parse(sessionStorage.getItem("city")),...resList]//setCurrent(JSON.parse(sessionStorage.getItem("city")));
            setResList(copy);
        }

    },[])
    console.log('current on base: ', current);
    console.log('resList: ', resList);
    console.log('sessionStorage.city: ', JSON.parse(sessionStorage.city));

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