import React, {useEffect, useState} from 'react';

import Search from '../../components/Search';
import History from '../../components/History';
import InfoCard from '../../components/InfoCard';
import UnitButtons from '../../components/UnitButtons';

const Base = () => {
    const [resList, setResList] = useState([]);
    const [unit, setUnit] = useState("metric");
    //Add useEffect to get user's location and display the weather there.
    //have fallback plan if requires approval from user -> random city?

    return (
        <>
            <Search state={{resList: [resList, setResList], unit: [unit, setUnit]}}/>

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