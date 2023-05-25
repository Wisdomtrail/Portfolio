import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import "../styles/Portfolio.css";
import me from "../assets/images/4.jpg";
import linkedInLogo from "../assets/images/linkedin.jpeg";
import gitHubLogo from "../assets/images/githubLogo.jpg";
import gmailLogo from "../assets/images/gmailLogo.jpg";
import stackOverflow from "../assets/images/stackOverFlow.jpeg";
import discord from "../assets/images/discord.jpeg";
import intellect from "../assets/images/intellect.svg";
import dev from "../assets/images/dev.svg";
import back from "../assets/images/back.svg";
import java from "../assets/images/java.jpeg";
import python from "../assets/images/python.jpeg";
import javaScript from '../assets/images/javascript.jpeg';
import react from "../assets/images/reactLogo.jpeg";
import mongo from "../assets/images/mongodb.jpeg";
import mysql from "../assets/images/mysql.jpeg";
import sqlserver from "../assets/images/sqlserver.jpeg"

function Portfolio() {
  const [isScrolling, setIsScrolling] = useState(false);
  

  const scrollToAbout = () => {
    if (!isScrolling) {
      setIsScrolling(true);
      scroll.scrollTo(document.getElementById("about").offsetTop, {
        duration: 500,
        smooth: true,
        spy: true,
        offset: -70,
        onAfter: () => setIsScrolling(false),
      });
    }
  };
  
  const scrollToService = () => {
    if (!isScrolling) {
      setIsScrolling(true);
      scroll.scrollTo(document.getElementById("services").offsetTop, {
        duration: 500,
        smooth: true,
        spy: true,
        offset: -70,
        onAfter: () => setIsScrolling(false),
      });
    }
  };
  

  return (
    <div className="mainContainer">
      <div className="topNav">
        <h1>Sunday</h1>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={scrollToAbout}
          style={{ cursor: "pointer" }} 
        >
          About me
        </Link>

        <Link
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={scrollToService}
          style={{ cursor: "pointer" }} 
        >
         Services
        </Link>

        <a href="">Skills</a>
        <a href="">Contact me</a>
      </div>
      <div className="body">
        <div className="info">
          <h1>Hi, I am</h1>
          <h2>Sunday Emmanuel</h2>
          <h6>A programmer</h6>
          <button className="d">Download cv</button>
          <button className="learn">learn more</button>
        </div>
        <div className="image">
          <img className="pic" src={me} alt="" />
        </div>
      </div>
      <div className="About" id="about">
        <center>
          <h1>About</h1>
        </center>
        <center>
          <h5>
            I am Sunday Emmanuel, a skilled programmer specializing in backend
            development.
          </h5>
          <h5>
            With a strong foundation in frontend technologies, I bring a
            holistic approach to my work.
          </h5>
          <h5>
            My expertise lies in crafting robust and scalable systems while
            creating intuitive user interfaces.
          </h5>
          <h5>
            I thrive on challenging projects and continually strive to stay at
            the forefront of industry trends.
          </h5>
          <h5>
            I am dedicated, detail-oriented, and always eager to deliver
            high-quality results.
          </h5>
        </center>
      </div>
      <br /><br /><br /><br /><br />
      <div className="do" id="services">
        <center>
          <h1>What I Do</h1>
        </center>
        <center className="box">
          <div className="intellect">
            <img className="int" src={intellect} alt="" /> <br />{" "}
            <h3>Software</h3>
            <h4>Development</h4>
          </div>
          <div className="dev">
            <img src={dev} alt="" />
            <h3>Web</h3>
            <h4>Development</h4>
          </div>
          <div className="back">
            <img src={back} alt="" />
            <h3>Back-End</h3>
            <h4>Development</h4>
          </div>
        </center>
      </div><br /><br /><br /><br /><br /><br />
      <div className="skills" id="skills">
        <center><h1>My Skills</h1> <br /></center>
        <div className="skillBox">
        <div className="java">
            <img className="javaImage" src={java} alt="" />
            <h2>Java</h2>
        </div>
        <div className="python">
            <img className="javaImage" src={python} alt="" />
            <h2>Python</h2>
        </div>
        <div className="python">
            <img className="javaImage" src={javaScript} alt="" />
            <h2>JavaScript</h2>
        </div>
        <div className="python">
            <img className="javaImage" src={react} alt="" />
            <h2>React</h2>
        </div>
        </div>
        <br />
        <center><h2>DataBase</h2></center>
        <div className="dataBase">
        <div className="first">
            <img className="javaImage" src={mongo} alt="" />
            <h2>Mongodb</h2>
        </div>
        <div>
            <img className="javaImage" src={mysql} alt="" />
            <h2>Mysql</h2>
        </div>
        <div >
            <img className="javaImage" src={sqlserver} alt="" />
            <h2>Mysql Server</h2>
        </div>
        </div>
      </div>
      <center className="div">
          <h1>Contact</h1>
          <a
            className="social-button"
            href="https://www.linkedin.com/in/sunday-emmanuel-29a92b253/"
            target="_blank"
          >
            <button style={{ border: "none", borderRadius: "50%", backgroundColor: "transparent" }}>
              <img
                className="linkedIn"
                src={linkedInLogo}
                alt="LinkedIn Logo"
                style={{ borderRadius: "50%", width: "40px", height: "40px" }}
              />
            </button>
          </a>
          <a href="https://github.com/sunepa01" target="_blank">
            <button style={{ border: "none", borderRadius: "50%", backgroundColor: "transparent" }}>
              <img
                className="linkedIn"
                src={gitHubLogo}
                alt="LinkedIn Logo"
                style={{ borderRadius: "50%", width: "40px", height: "40px" }}
              />
            </button>
          </a>
          <a href="https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act" target="_blank">
            <button style={{ border: "none", borderRadius: "50%", backgroundColor: "transparent" }}>
              <img
                className="linkedIn"
                src={gmailLogo}
                alt="LinkedIn Logo"
                style={{ borderRadius: "50%", width: "40px", height: "40px" }}
              />
            </button>
          </a>
          <a href="https://stackoverflow.com/users/21960400/sunday-emmanuel" target="_blank">
            <button style={{ border: "none", borderRadius: "50%", backgroundColor: "transparent" }}>
              <img
                className="linkedIn"
                src={stackOverflow}
                alt="LinkedIn Logo"
                style={{ borderRadius: "50%", width: "40px", height: "40px" }}
              />
            </button>
          </a>
          <a href="https://discord.com/channels/@me" target="_blank">
            <button style={{ border: "none", borderRadius: "50%", backgroundColor: "transparent" }}>
              <img
                className="linkedIn"
                src={discord}
                alt="LinkedIn Logo"
                style={{ borderRadius: "50%", width: "40px", height: "40px" }}
              />
            </button>
          </a>
        </center>
    </div>
  );
}

export default Portfolio;
