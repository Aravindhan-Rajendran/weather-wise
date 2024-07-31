import React, { useState } from 'react';
import axios from 'axios';

const Serach = ({ setWeatherDetails }) => {
    const [search, setSearch] = useState("");
    const [error, setError] = useState(null);

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const fetchWeather = async (query) => {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: { q: query },
            headers: {
                'x-rapidapi-key': '0b11673617msha9e8545b216d217p161bd5jsn6f9dabd3ddc7',
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setWeatherDetails(response.data); // Update parent component
            setError(null); // Clear previous errors
        } catch (error) {
            setError('Error fetching weather data. Please try again.');
            console.error('Error fetching weather data:', error.response ? error.response.data : error.message);
        }
    };

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            await fetchWeather(search);
        }
    };

    return (
        <div className='search-section'>
            <div className='search-container'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                </svg>
                <input
                    type="text"
                    placeholder='Search for a city'
                    value={search}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                />
            </div>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Serach;