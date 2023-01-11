import React from "react";

import "./Forecast.css";

export default function forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-5">
          <div className="Forecast-day">Friday</div>
          <div className="Forecast-icon" size={20}>
            <img src="http://openweathermap.org/img/wn/50d@2x.png"></img>
          </div>
          <div className="Forecast-temps">
            <span className="Forecast-temps-max">0°</span>
            {""}
            <span className="Forecast-temps-min">-5°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
