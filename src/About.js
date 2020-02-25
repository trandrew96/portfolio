import React from "react";
import './stylesheets/portfolio.css'

export default function About() {
  return(
    <div className="container pt-1 pt-md-5">
      <div className="row text-center">
        <div className="col-12">
          <h1 className="mb-3">About Me</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div className="card">
            <p className="text-center">
                I love well designed apps. I am studying Software Engineering at UVic.
                Previously I worked at ACDSystems as a Junior Web Developer, where I 
                mostly used Symfony, Twig, and Bootstrap. I have learned the basics of
                many languages, but I'm mostly interested in JS and Web Dev at the moment.
                I'm currently teaching myself ReactJS and will have a small project out shortly.
                Stay tuned!
            </p> 
          </div>
        </div>
      </div>
    </div>
  );
}          