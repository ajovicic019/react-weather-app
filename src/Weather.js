import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter city.."
              className="form-control"
            />
          </div>{" "}
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>{" "}
        </div>
      </form>
      <h1>Novi Sad</h1>
      <ul>
        <li>Friday, 10:38</li>
        <li>Mostly cloudy</li>
      </ul>{" "}
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Cloudy"
          />{" "}
          16°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 88%</li>
            <li>Wind: 6km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
