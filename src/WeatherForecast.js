import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setforecast] = useState(null);

  function handleForecastResponse(response) {
    setforecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast row">
        <div className="col">
          {new Date(forecast.list[0].dt * 1000).getHours()}:00
          <img
            src={`https://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`}
            alt=""
          />
          {Math.round(forecast.list[0].main.temp)}°C
        </div>

        <div className="col">
          {new Date(forecast.list[1].dt * 1000).getHours()}:00
          <img
            src={`https://openweathermap.org/img/wn/${forecast.list[1].weather[0].icon}@2x.png`}
            alt=""
          />
          {Math.round(forecast.list[1].main.temp)}°C
        </div>

        <div className="col">
          {new Date(forecast.list[2].dt * 1000).getHours()}:00
          <img
            src={`https://openweathermap.org/img/wn/${forecast.list[2].weather[0].icon}@2x.png`}
            alt=""
          />
          {Math.round(forecast.list[2].main.temp)}°C
        </div>

        <div className="col">
          {new Date(forecast.list[3].dt * 1000).getHours()}:00
          <img
            src={`https://openweathermap.org/img/wn/${forecast.list[3].weather[0].icon}@2x.png`}
            alt=""
          />
          {Math.round(forecast.list[3].main.temp)}°C
        </div>

        <div className="col">
          {new Date(forecast.list[4].dt * 1000).getHours()}:00
          <img
            src={`https://openweathermap.org/img/wn/${forecast.list[4].weather[0].icon}@2x.png`}
            alt=""
          />
          {Math.round(forecast.list[4].main.temp)}°C
        </div>
      </div>
    );
  } else {
    const API_KEY = process.env.REACT_APP_API_KEY;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${API_KEY}&units=metric`;
    //ajax call
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
}
