import React, {useState} from 'react';
import axios from 'axios';


const Search = (props) => {
    const key = process.env.REACT_APP_API_KEY;

    const [city, setCity] = useState("");
    const [unit, setUnit] = useState("kelvin");
    const {
        resList: [resList, setResList]
        } = { 
        resList: useState([]),
        ...(props.state || {})
        };
        


    console.log('props: ', props);
    
    const searchCity = (e)=> {
        e.preventDefault();
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`).then(({data})=>{
            console.log('data: ', data);
        }).catch((err)=>{
            console.error(err.message)
        });

        //add city to the history list
    }

    return (
        <div className="search">
            <form>
                <input type="text" name="search" onInput={(e)=>setCity(e.target.value)} placeholder="Type a city here"></input>
                <label>Unit</label>
                <select value={unit} onChange={(e)=>setUnit(e.target.value)}>
                    <option value="standard">Kelvin</option>
                    <option value="metric">Celsius</option>
                    <option value="imperial">Fahrenheit</option>
                </select>
                <button onClick={(e)=>searchCity(e)}>Search</button>
            </form>
        </div>
    )
}

export default Search;