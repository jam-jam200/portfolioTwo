import React from "react";
import "./Hero.css";
import {
  github,
  instagram,
  linkedin,
  girl,
  vector1,
  vector2,
  glassesemoji,
  crown,
  thumbup,
} from "../../assets";
import { FloatingDiv } from "../../components";

function Hero() {
  return (
    <section className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hello😊, I Am</span>
          <span>Jessica Oyakhilome</span>
          <span>
            A Frontend Developer with experience in building responsive websites
            and testing softwares to guarantee they meet the client's
            requirements.
          </span>
        </div>
        <button className="i-button button">Hire Me!</button>
        <div className="i-icons">
          <a
            href="https://github.com/jam-jam200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="github link: https://github.com/jam-jam200"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jessicaoyaks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="linkedin link: https://www.linkedin.com/in/jessicaoyaks/"
            />
          </a>
          <a
            href="https://www.instagram.com/jessy_oyaks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagram}
              alt="instagram link: https://www.instagram.com/jessy_oyaks/"
            />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={vector1} alt="blob" />
        <img src={vector2} alt="blob" />
        <img src={girl} alt="girl" />
        <img src={glassesemoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={crown} txt1="Frontend" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem " }}>
          <FloatingDiv image={thumbup} txt1="Software" txt2="Tester" />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#d7b8b8",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </section>
  );
}

export default Hero;
