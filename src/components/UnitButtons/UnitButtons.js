import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import axios from 'axios';

const UnitButtons = (props) => {
    //console.log('props on button: ', props);
    const [selected, setSelected] = useState(null);

    const updateSearch = (e)=>{
        setSelected(e.target.name)
        if (props.unit !==selected) {

        }
    } 
    return (
        <>
            <ButtonGroup>
                <Button color="primary" name="imperial" onClick={(e) => updateSearch(e)} active={selected === "imperial"}>℉</Button>
                <Button color="primary" name="metric" onClick={(e) => updateSearch(e)} active={selected === "metric"}>℃</Button>
            </ButtonGroup>
            <p>Selected: {selected}</p>
        </>
    )
}

export default UnitButtons;