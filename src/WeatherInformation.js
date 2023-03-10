import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherUnits from "./WeatherUnits.js";

export default function WeatherInformation(props) {
  return (
    <div className="WeatherInformation">
      <h2>{props.data.city}</h2>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
            />

            <div className="float-left">
              <WeatherUnits celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 50%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
