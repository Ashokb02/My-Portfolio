import React from 'react'
import resumePDF from '../assets/AshokKumarResume.pdf';
import {animateScroll as scroll} from 'react-scroll';
import "./Resume.css";

export default function Resume() {
  const scrollToTop=()=>{
    scroll.scrollToTop();
  }
  return (
    <div id="resume" className='resume-container' name="resume">
      <h1 className='skills-heading'>Resume</h1>
      <embed src={resumePDF} width="100%" height={1000}/>
      <div className='go-top'>
        <button onClick={scrollToTop}><i className='fa fa-arrow-up'/></button>
      </div>
    </div>
  )
}

function DownloadResume(){
  return (
    <a href="/#" className='download-link'>Download Resume</a>
  )
}
