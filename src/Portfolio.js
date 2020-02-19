import React from "react";
import weatherAppIcon from './assets/img/weather-app-icon.PNG';
import './stylesheets/portfolio.css'

export default function Portfolio() {
  return(
    <div className="container p-5">
      <div className="row text-center">
        <div className="col-12">
          <h1>My Projects</h1>
          <br/>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 offset-lg-4">
          <div className="card">
            <div className="row mb-3">
              <div className="col-lg-12 text-center">
                <h2>Weather App</h2>
                <img src={weatherAppIcon} alt="weather app icon" style={{width: 200+'px'}}/>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <p>
                  This app was made using React and the DarkSkyAPI. 
                  You can view the current weather and a weekly forecast 
                  for a select number of cities.             
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}          