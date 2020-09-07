import React from "react";
import "./stylesheets/portfolio.css";
import weatherDemoGif from "./assets/img/weather-demo.gif";

const weatherAppUrl = "https://weather.trandrew.ca/";
const projectTrackerUrl = "https://tranquil-atoll-61328.herokuapp.com/";
const wiseworldUrl = "https://wiseworldentertainment.com";

export default function Portfolio() {
  return (
    <div className="container-fluid pt-1 pt-md-5">
      <div className="row text-center">
        <div className="col-12">
          <h1 className="mb-3">My Projects</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="row mb-3 text-center">
              <div className="col-lg-12">
                <h2>Project Tracker App</h2>
                <a href={projectTrackerUrl}>
                  <img
                    className="img-bot"
                    src={
                      process.env.PUBLIC_URL + "/img/project-tracker-demo.gif"
                    }
                    alt="project tracker demo"
                  />
                  <img
                    className="img-top"
                    src={
                      process.env.PUBLIC_URL + "/img/project-tracker-demo.PNG"
                    }
                    alt="project tracker demo"
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <p>
                  Track the progress of your projects using this full stack web
                  app! This app was inspired by Bugzilla, and was built using
                  the MERN stack. This comes with a breadth of features,
                  including:
                </p>
                <br />
                <ul>
                  <li>Creating and assigning Tasks</li>
                  <li>Commenting on tasks</li>
                  <li>Organizing tasks based on project</li>
                  <li>Filtering tasks based on assignee, priority</li>
                  <li>
                    Marking projects as complete, which removes all tasks under
                    that project
                  </li>
                </ul>
                <br />
                <p>
                  Feel free to <a href={projectTrackerUrl}>try this app</a> by
                  logging in and messing around with the features! You can log
                  in as the user test@test.com, password: test or you can make
                  your own test account.
                </p>
                <br />
                <p className="text-danger">
                  Disclaimer: don't use your real email or password, as this app
                  is not fully secure.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="row mb-3">
              <div className="col-lg-12 text-center">
                <h2>Weather App</h2>
                <a href={weatherAppUrl}>
                  <img
                    className="img-bot"
                    src={process.env.PUBLIC_URL + "/img/weather-demo.gif"}
                    alt="weather app icon"
                  />
                  <img
                    className="img-top"
                    src={process.env.PUBLIC_URL + "/img/weather-demo.PNG"}
                    alt="weather app icon"
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <p>
                  This app was made using React and the DarkSkyAPI. You can view
                  the current weather and a weekly forecast for a select number
                  of cities. &nbsp;
                  <a href="https://weather.trandrew.ca">Try it!</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          {" "}
          <div className="card">
            <div className="row mb-3">
              <div className="col-lg-12 text-center">
                <h3>Wise World Entertainment</h3>
                <a href={wiseworldUrl}>
                  <img
                    className="img-bot"
                    src={process.env.PUBLIC_URL + "/img/wiseworld-demo.gif"}
                    alt="wiseworld demo gif"
                  />
                  <img
                    className="img-top"
                    src={process.env.PUBLIC_URL + "/img/wiseworld-demo.PNG"}
                    alt="wiseworld demo gif"
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <p>
                  This site was made to showcase the latest music, videos, and
                  art by my musician friend the Wiseguy! Check out his music by
                  clicking on an album art, then select your preferred platform.
                  Do yourself a favor and &nbsp;
                  <a href={wiseworldUrl}>check it out!</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
