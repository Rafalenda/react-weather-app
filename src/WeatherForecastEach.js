import React from "react";

export default function WeatherForecastEach(props) {
  return (
    // <div className="WeatherForecastEach col">
    //   {new Date(props.data.dt * 1000).getHours()}:00
    //   {Math.round(props.data.main.temp)}°C
    // </div>

    <img src={props.data.iconUrl} alt="imagem" className="float-lef" />
  );
}
