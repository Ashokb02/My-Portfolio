import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <h2 className="text-center mb-4 design">Projects</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Project Title</h5>
                <p className="card-text">my portfolio website...</p>
                <a href="#" className="btn btn-info">
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Cure Bridge </h5>
                <p className="card-text">
                  CureBridge is a comprehensive hospital management and medical
                  consultation platform that connects patients with hospitals
                  and doctors across India. It facilitates patient registration,
                  doctor appointments, and case tracking through a single-page
                  application (SPA).
                </p>
                <a
                  href="https://www.curebridge.in "
                  className="btn btn-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title ">
                  Agriculture - Organic Farming Website
                </h5>
                <p className="card-text">
                  Designed and developed a responsive website for organic
                  farming, showcasing eco-friendly practices and sustainable
                  agricultural innovations using HTML, CSS, and JavaScript.
                </p>
                <a
                  href="https://ashokb02.github.io/agriculture-website/"
                  className="btn btn-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
