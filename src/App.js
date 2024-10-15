import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CityWeather from './components/CityWeather';
import './App.scss';
const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney'];

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const responses = await Promise.all(
          cities.map(city => 
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d1663f8de217b47a635b80ba63a29f0`)
          )
        );
        setWeatherData(responses.map(res => res.data));
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchWeather();
  }, []);
  return (
    <div className='weather-dashboard'>
      <h1 className='title'>Weather Dashboard</h1>
      <div className='city-weather-container'>
        {weatherData.map((weather, index) => (
          <CityWeather key={index} weather={weather} />
        ))}
      </div>
    </div>
  )
}

export default App