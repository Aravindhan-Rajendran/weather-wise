import React from 'react';
import WeatherClody from '../assets/weather-cloudy.png';

const WeatherCard = ({ weatherDetails }) => {
    if (!weatherDetails) return null; // Return null if no weatherDetails are provided

    return (
        <div className='weather-section'>
            <div className='weather-card'>
                <div className='weather-temp-c'><sup>o</sup>
                    {weatherDetails.current.temp_c}
                </div> 
                <div className="weather-info">
                    <span>Humidity: {weatherDetails.current.humidity}%</span>
                    <span>Cloudiness: {weatherDetails.current.cloud}%</span>
                </div>
                <div className="weather-place">
                    {weatherDetails.location.name}, {weatherDetails.location.region}
                </div>
                <div className="weather-avatar">
                    <img src={WeatherClody} alt="Weather" />
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;