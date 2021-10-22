import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const UnitButtons = (props) => {
    console.log('props on button: ', props);
    const [rSelected, setRSelected] = useState(null);

    return (
        <>
            <ButtonGroup>
                <Button color="primary" onClick={() => setRSelected("F")} active={rSelected === "F"}>℉</Button>
                <Button color="primary" onClick={() => setRSelected("C")} active={rSelected === "C"}>℃</Button>
            </ButtonGroup>
            <p>Selected: {rSelected}</p>
        </>
    )
}

export default UnitButtons;