import React from "react";
import githubLogo from './assets/img/github-logo-white.png';
import linkedinLogo from './assets/img/linkedin-logo-white.png';

export default function Home() {
  return (
    <div className="container home" style={{height: 90+"vh"}}>
          <div className="row align-items-center" style={{height: 90+"vh"}}>
            <div className="col-12 text-center">
              <h1>Andrew Tran</h1>
              <p>Software Engineering Student</p>
              <a href="https://www.github.com/trandrew96" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="github-logo"/></a>
              <a href="https://www.linkedin.com/in/trandrewxyz/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo}alt="linkedin-logo"/></a>
            </div>
          </div>
        {/* <div className="row pt-5">
          <div className="col-lg-8 offset-lg-2">
            <p className="text-center">
              I love well designed apps. I am studying Software Engineering at UVic.
              Previously I worked at ACDSystems as a Junior Web Developer, where I 
              mostly used Symfony, Twig, and Bootstrap. I have learned the basics of
              many languages, but I'm mostly interested in JS and Web Dev at the moment.
              I'm currently teaching myself ReactJS and will have a small project out shortly.
              Stay tuned!</p>
          </div>
        </div> */}
    </div>
  );
}