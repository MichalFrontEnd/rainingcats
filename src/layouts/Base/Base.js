import React, {useEffect, useState} from 'react';

import Search from '../../components/Search';
import InfoCard from '../../components/InfoCard';

const Base = () => {
    const [resList, setResList] = useState([]);
    //Add useEffect to get user's location and display the weather there.
    //have fallback plan if requires approval from user -> random city?
    console.log('resList on base: ', resList);
    return (
        <>
            <Search state={{resList: [resList, setResList]}}/>

            {resList && (
                <InfoCard results={resList[0]} />)
            }
        </>
    )
}

export default Base;