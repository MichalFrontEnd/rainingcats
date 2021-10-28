import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const History = ({onHistorySelect, resList}) => {
    const [results, setResaults] = useState([])
    //const {
    //    resList: [resList, setResList],
    //} = {
    //    resList: useState([]),
    //    ...(props.state || {}),
    //};

    useEffect(()=> {
        setResaults(resList.length>1? resList : null)
    },[resList])

    //console.log('props.results.history: ', props.results.history[0]);

    //const switchCurrent=(i) => {
    //    console.log('i: ', i);
    //    let stateCopy = results; 
    //    //const item = stateCopy.splice(i+1, 1);
    //    stateCopy.unshift(i+1);
    //    console.log('stateCopy: ', stateCopy);
    //    setResList(stateCopy)
    //}


    return (
            <div className="history-container">
            {results && (
                <>
                    <h3>Your previous searches:</h3>
                    {results.slice(0,3).map((res, i) => 
                                <div className="history-item" key={i} onClick={(e)=>{onHistorySelect(i)}}>
                                    <img src={`http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`} alt="icon"></img>
                                    <h4>{res.name}</h4>
                                    <p>{res.weather[0].main}</p>
                                </div>
                            )
                    }
                </>
            )}
        </div>

    )
}

export default History;