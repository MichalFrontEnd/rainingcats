import React from "react";
//import { Card } from '@mui/material';

const InfoCard = (props) => {
    console.log('props on card: ', props);

    const {main, name, weather, wind} = props?.results;

    

    return (
        <div>
            {props.results && (
                <h2>{name}</h2>
            
            )}
        </div>
    )
}

export default InfoCard;    