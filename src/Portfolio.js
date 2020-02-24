import React from "react";
import './stylesheets/portfolio.css'
import weatherDemoGif from './assets/img/weather-demo.gif';

const weatherAppUrl = "https://weather.trandrew.ca/";

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
        <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <div className="card">
            <div className="row mb-3">
              <div className="col-lg-12">
                <h2>Weather App</h2>
                <a href={weatherAppUrl}><img src={weatherDemoGif} alt="weather app icon"/></a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <p>
                  This app was made using React and the DarkSkyAPI. 
                  You can view the current weather and a weekly forecast 
                  for a select number of cities.  
                </p>
                <p className="mt-3">
                  <a href={weatherAppUrl}>View the app here!</a>     
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}          
