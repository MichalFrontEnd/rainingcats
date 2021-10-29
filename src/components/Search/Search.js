import React, { useState } from "react";

const Search = ({ onSearch }) => {
    const [city, setCity] = useState("");
    const [unit, setUnit] = useState("metric");

    return (
        <div className="search">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onSearch(e.target);
                    setCity("");
                }}
            >
                <input type="text" name="city" value={city} onInput={(e) => setCity(e.target.value)} placeholder="Type a city here"></input>
                <label>Unit</label>
                {/* unit can be changed only when there's a city input */}
                <select name="unit" value={unit} onChange={city ? (e) => setUnit(e.target.value) : null}>
                    <option value="metric">Metric | ℃</option>
                    <option value="imperial">Imperial | ℉</option>
                </select>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default Search;
