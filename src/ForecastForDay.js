import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastForDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  return (
    <div className="ForecastForDay">
      <div className="WeatherDailyForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherDailyForecast-day">{day()}</div>
            <WeatherIcon
              code={props.data.weather[0].icon}
              size={36}
              className="icon"
            />
            <div className="WeatherDailyForecast-temperatures">
              <span className="WeatherDailyForecast-temperature-max">
                {maxTemp()}°
              </span>{" "}
              <span className="WeatherDailyForecast-temperature-min">
                {" "}
                {minTemp()}°
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
