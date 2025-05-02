import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <h2 className="text-center mb-4 design">About Me</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className='fontdesign'>
              Hello! I'm Ashok Kumar, a passionate React.js Developer. 
              I love building beautiful, fast, and responsive websites. 
              I always focus on writing clean and efficient code to deliver high-quality web experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
