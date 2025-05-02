import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Ashok's Portfolio</div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
       

        <div className="close-icon" onClick={toggleMenu}><FaTimes /></div>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>
    </nav>
  );
}

export default Navbar;
