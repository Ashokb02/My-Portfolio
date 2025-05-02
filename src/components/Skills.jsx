import React from 'react';
import './Skills.css';

const skills = [
  'JavaScript (ES6+)', 'HTML5', 'CSS3', 'ReactJS',
  'Material-UI', 'Bootstrap', 'Redux', 'Context API',
  'NodeJS', 'ExpressJS', 'MongoDB', 'Axios',
  'Postman', 'Git & GitHub', 'Fetch API'
];

function Skills() {
  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <h2 className="text-center mb-4 design">Technical Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <span className="skill-tag" key={index}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
