import React from "react";
import "./stylesheets/Home.css";
// import githubLogo from './assets/img/github-logo-white.png';
import githubLogo from "./assets/img/GitHub-Mark-Light-64px.png";
import linkedinLogo from "./assets/img/linkedin-logo-white.png";

export default function Home() {
  return (
    <div className="container home" style={{ height: 90 + "vh" }}>
      <div className="row align-items-center" style={{ height: 90 + "vh" }}>
        <div className="col-12 text-center">
          <h1 className="glow home-text">Andrew Tran</h1>
          <p className="glow home-text">Software Engineering Student</p>
          <a
            href="https://www.github.com/trandrew96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubLogo}
              className="social-icon glow"
              alt="github-logo"
            />
          </a>
          {/* <a href="https://www.linkedin.com/in/trandrewxyz/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo}alt="linkedin-logo"/></a> */}
        </div>
      </div>
    </div>
  );
}
