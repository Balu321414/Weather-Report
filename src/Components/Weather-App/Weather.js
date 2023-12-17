
import React, { useState } from "react";
import './Weather.css';
import search_icon from "../Assets/search_icon.jpg";
import clear_icon from '../Assets/clear_icon.jpg';
import cloud_icon from '../Assets/cloud_icon.jpg';
import drizzle_icon from '../Assets/drizzel_icon.jpg';
import rain_icon from '../Assets/rain_icon.jpg';
import snow_icon from '../Assets/snow_icon.jpg';
import wind_icon from '../Assets/wind_icon.jpg';
import humidity_icon from '../Assets/humidity_icon.jpg';

const WeatherApp = () => {
    let api_key = "5c88de32cc8cea4da78e4be1627d9196";

    const [wicon, setWicon] = useState(cloud_icon);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if (element[0].value === "") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temprature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = Math.floor(data.wind.speed) + "Km/h";
        temprature[0].innerHTML = Math.floor(data.main.temp) + "°c";
        location[0].innerHTML = data.name;
        
        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
            setWicon(clear_icon);
        }
        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
            setWicon(cloud_icon);
        }
        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
            setWicon(rain_icon);
        }
        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
            setWicon(rain_icon);
        }
        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
            setWicon(snow_icon);
        }
        else {
            setWicon(clear_icon);
        }
    }
    return (
        <div className="container">
            <div className="top-bar">
                <input title="Enter city Name" type="text" className="cityInput" placeholder="Search"/>
                <div className="search-icon" onClick={() => search()}>
                    <img src={search_icon} alt="search-icon" />
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="cloud-icon" className="aa" />
            </div>
            <div className="weather-temp">00°c</div>
            <div className="weather-location">.....</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="humidity-icon" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">50%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="wind-icon" className="icon" />
                    <div className="data">
                        <div className="wind-rate">50 Km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WeatherApp;
