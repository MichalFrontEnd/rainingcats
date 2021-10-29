import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "./history.css";

const History = ({ onHistorySelect, resList }) => {
    const [results, setResaults] = useState([]);

    //Checks if there was more than 1 search result
    useEffect(() => {
        setResaults(resList.length > 1 ? resList : null);
    }, [resList]);

    return (
        <>
            {results && (
                <div className="history-container mt-5">
                    <h3>Your previous searches:</h3>
                    <Row xs={3} className="justify-content-space-around">
                        {results.slice(0, 3).map((res, i) => (
                            <Card
                                id="history-item"
                                className="history-item m-2 w-25 border-top-0 border-start-0 rounded"
                                key={i}
                                onClick={(e) => {
                                    onHistorySelect(i);
                                }}
                            >
                                <Card.Img src={`http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`} alt="icon" />
                                <Card.Body className="p-0">
                                    <Card.Title className="history-title fs-6" as="h6">
                                        {res.name}
                                    </Card.Title>
                                    <Card.Text className="mb-2">{res.weather[0].main}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                </div>
            )}
        </>
    );
};

export default History;
