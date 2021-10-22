import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const History = (props) => {
    const [results, setResaults] = useState([])

    useEffect(()=> {
        setResaults(props.results.length>1? props.results : null)
    },[props.results])

    console.log('results: ', results);
    return (
            <div className="history-container">
            {results && (
                <>
                    <h3>Your previous searches:</h3>
                    {results.slice(1,3).map((res, i) => 
                                <div className="history-item" key={i}>
                                {/*<img src={`http://openweathermap.org/img/wn/${values.weather.icon}@4x.png`}}></img>*/}
                                    <h4>{res.name}</h4>
                                </div>
                            )
                    }
                </>
            )}
        </div>

    )
}

export default History;