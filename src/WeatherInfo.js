import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <span>
        {" "}
        <h1 className="display-5">
          {props.data.city}, {props.data.country}
        </h1>
      </span>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img src={props.data.iconUrl} alt="imagem" className="float-left" />

            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>
              <strong>Humidity:</strong> {props.data.humidity}%
            </li>
            <li>
              <strong>Wind:</strong> {props.data.wind}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
