import React from "react";
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const UnitButtons = ({ unit, onUnitSelect }) => {
    //renders unit buttons and passes button name (unit) to function on card.
    return (
        <Row>
        <Col xs={{offset: 8 }} >
            <ButtonGroup col={4}>
                <Button variant="outline-secondary" size="sm" name="imperial" onClick={(e) => onUnitSelect(e.target.name)} disabled={unit === "imperial"}>
                    ℉
                </Button>
                <Button variant="outline-secondary" size="sm" name="metric" onClick={(e) => onUnitSelect(e.target.name)} disabled={unit === "metric"}>
                    ℃
                </Button>
            </ButtonGroup>
        </Col>
        </Row>
    );
};

export default UnitButtons;
