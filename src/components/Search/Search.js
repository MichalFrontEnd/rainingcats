import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Search = ({ onSearch }) => {
    const [city, setCity] = useState("");
    const [unit, setUnit] = useState("metric");

    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            onSearch(e.target);
            setCity("");
        }
    };
    return (
        <div className="search mb-3">
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    onSearch(e.target);
                    setCity("");
                }}
                onKeyUp={(e) => {
                    handleKeyUp(e);
                }}
            >
                <Row className="justify-content-space-between">
                    <Col xs="auto">
                        <Form.Control size="sm" type="text" name="city" value={city} onInput={(e) => setCity(e.target.value)} placeholder="Type a city here"></Form.Control>
                    </Col>
                    <Col xs="auto">
                        {/* unit can be changed only when there's a city input */}
                        <Form.Select size="sm" name="unit" value={unit} onChange={city ? (e) => setUnit(e.target.value) : null}>
                            <option value="metric">℃</option>
                            <option value="imperial">℉</option>
                        </Form.Select>
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" variant="outline-secondary" size="sm">
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default Search;
