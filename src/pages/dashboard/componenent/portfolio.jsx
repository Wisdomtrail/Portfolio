import React, { useState, useEffect, useRef } from "react";
import "../styles/Portfolio.css";
import { Link } from "react-router-dom";
import myImage from "../assets/images/me.jpg";
import cube from '../assets/images/cube.jpg'

import mensAppVideo from '../assets/videos/mensAppVideo.mp4'

function Portfolio() {
  const [showImage, setShowImage] = useState(false);
  const projectsRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleViewProjectsClick = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleVideoEnd = () => {
    videoRef.current.play()
  }
  const [showButtons, setShowButtons] = useState(false);


  return (
    <div className="mainContainers">
      <div className="topNav">
        <span className="spot">PORT</span> <span className="on">FOLIO</span>
        <button className="v" onClick={handleViewProjectsClick}>
          View projects
        </button>
        <Link className="s">Skills</Link>
        <Link className="c">Contact</Link>
      </div>
       
        <h1>Sunday Emmanuel</h1>
        <img className="cube" src={cube} alt="" />
        <img
          className={`Me${showImage ? " show" : ""}`}
          src={myImage}
          alt="My Image"
          width="300"
          height="300"
        />
      
      <div className="skills">

      </div>

      <div className="body" ref={projectsRef}>
        <div className="projects">
        <div className="box1">
          <video muted autoPlay onEnded={handleVideoEnd} ref={videoRef} src={mensAppVideo} type="video/mp4" />
          <div className="buttonContainer" onMouseEnter={() => {setShowButtons(true)}} onMouseLeave={() => {setShowButtons(false)}}>
            <div className="buttons" style={{opacity: showButtons ? 1 : 0}}>
              <button className="Demo">Demo</button>
              <button className="viewCode">View Code</button>
            </div>
          </div>
          Menstration Tracker App
          <p>A mobile app that helps women track their menstrual cycles and predict future cycles.</p>
        </div>
          <div className="box">
            Box 2
            <p>Project 2 description</p>
          </div>
          <div className="box">
            Box 3
            <p>Project 3 description</p>
          </div>
          <div className="box">
            Box 4
            <p>Project 4 description</p>
          </div>
          <div className="box">
            Box 5
            <p>Project 5 description</p>
          </div>
          <div className="box">
            Box 6
            <p>Project 6 description</p>
          </div>
          <div className="box">
            Box 7
            <p>Project 7 description</p>
          </div>
          <div className="box">
            Box 8
            <p>Project 8 description</p>
          </div>
          <div className="box">
            Box 9
            <p>Project 9 description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
