import React, { useState } from "react";
import "./Intro.scss";
import {
  FaArrowDown,
  FaFacebook,
  FaGithub,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
function Intro() {
  const [close, setclose] = useState(false);
  setTimeout(() => {
    setclose(!close);
  }, 4000);

  return (
    <div id="intro" className="intro">
      <div className="left">
        <div className="imgcont">
          <img src="/pic1.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="content">
          <h2>Hi There,I'm</h2>
          <h1>AKibrot Samuel</h1>
          <div className="span">
            <h3>Freelance</h3>
            <span style={close ? { width: "0" } : { width: "370px" }}>
              <h3>MERN_stack_developer</h3>
            </span>
            <b>|</b>
          </div>
        </div>

        <div className="arrow">
          <div className="socialicons">
            <a
              href="http://github/akibrot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="git " />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="fb" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="tele" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="you" />
            </a>
          </div>

          <div className="arrowdown">
            <a href="#port">
              <FaArrowDown className="ic" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
