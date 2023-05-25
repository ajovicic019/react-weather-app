import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherDailyForecast.css";

export default function WeatherDailyForecast() {
  return (
    <div className="WeatherDailyForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherDailyForecast-day">Wed</div>
          <WeatherIcon code="01d" size={36} className="icon" />
          <div className="WeatherDailyForecast-temperatures">
            <span className="WeatherDailyForecast-temperature-max">22°</span>{" "}
            <span className="WeatherDailyForecast-temperature-min"> 15°</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
