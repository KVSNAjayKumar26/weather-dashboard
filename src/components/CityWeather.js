import React from 'react'
import { FaCloudSun, FaTemperatureHigh, FaWind } from 'react-icons/fa6';

const CityWeather = ({ weather }) => {
    const tempCelsius = Math.round(weather.main.temp - 273.15);
  return (
    <div className='city-weather-card'>
        <h2>{weather.name}</h2>
        <p><FaTemperatureHigh />Temp: {tempCelsius}°C</p>
        <p><FaWind />Wind: {weather.wind.speed} m/s</p>
        <p><FaCloudSun />{weather.weather[0].description}</p>
    </div>
  );
};

export default CityWeather;