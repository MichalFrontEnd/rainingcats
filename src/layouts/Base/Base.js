import React, {useEffect, useState} from 'react';

import Search from '../../components/Search';

const Base = () => {
    const [resList, setResList] = useState([]);
    //Add useEffect to get user's location and display the weather there.
    //have fallback plan if requires approval from user -> random city?

    return (
        <>
            <Search state={{resList: [resList, setResList]}}/>
        </>
    )
}

export default Base;