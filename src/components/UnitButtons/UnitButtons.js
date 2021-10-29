import React from "react";
import { Button, ButtonGroup } from "reactstrap";

const UnitButtons = ({ unit, onUnitSelect }) => {
    //renders unit buttons and passes button name (unit) to function on card.
    return (
        <>
            <ButtonGroup>
                <Button color="primary" name="imperial" onClick={(e) => onUnitSelect(e.target.name)} disabled={unit === "imperial"}>
                    ℉
                </Button>
                <Button color="primary" name="metric" onClick={(e) => onUnitSelect(e.target.name)} disabled={unit === "metric"}>
                    ℃
                </Button>
            </ButtonGroup>
        </>
    );
};

export default UnitButtons;
