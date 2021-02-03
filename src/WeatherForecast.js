import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setforecast] = useState(null);

  function handleForecastResponse(response) {
    console.log(response.data);
    setforecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        {Math.round(forecast.list[0].main.temp)}
        {Math.round(forecast.list[1].main.temp)}
        {Math.round(forecast.list[2].main.temp)}
        {Math.round(forecast.list[3].main.temp)}
        {Math.round(forecast.list[4].main.temp)}
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
