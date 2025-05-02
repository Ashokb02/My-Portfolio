import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Hello, I'm <span>Ashok Vempalli</span></h1>
        <h2>FrontEnd Developer 🚀</h2>

        <p className="hero-description">
          I can create beautiful and functional websites with React.js and CSS
        </p>

        <div className="social-icons">
          <a href="https://www.youtube.com/@AshokvAshu"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
        </div>

        <button className="hero-button"><a href="#resume" className="a">Resume</a></button>
      </div>

      <div className="hero-right">
        <img 
          src="/images/mypic.jpeg" // <-- Direct path ninchi manual image vey
          alt="Hero Ashu" 
          className="hero-image" 
        />
      </div>
    </section>
  );
}

export default Hero;
