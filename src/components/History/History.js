import React, { useEffect, useState } from "react";

const History = ({ onHistorySelect, resList }) => {
    const [results, setResaults] = useState([]);

    //Checks if there was more than 1 search result
    useEffect(() => {
        setResaults(resList.length > 1 ? resList : null);
    }, [resList]);

    return (
        <div className="history-container">
            {results && (
                <>
                    <h3>Your previous searches:</h3>
                    {results.slice(0, 3).map((res, i) => (
                        <div
                            className="history-item"
                            key={i}
                            onClick={(e) => {
                                onHistorySelect(i);
                            }}
                        >
                            <img src={`http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`} alt="icon"></img>
                            <h4>{res.name}</h4>
                            <p>{res.weather[0].main}</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default History;
