import React from "react";
import "./Service.css";
import { heart, glasses, humble } from "../../assets";
import { Card } from "../../components";
import Resume from "./resume.pdf";

function Service() {
  return (
    <section className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          I offer a variety of services, including the creation of responsive
          websites using <br />
          front-end technologies and the testing of software using the right
          tools.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ef999994" }}></div>
      </div>
      <div className="cards">
        <div style={{ left: "20rem" }}>
          <Card
            emoji={heart}
            heading="Animation"
            details="Three.js, Framer Motion, Animate.css"
          />
        </div>
        <div style={{ top: "12rem", left: "-2rem" }}>
          <Card
            emoji={glasses}
            heading="Developer"
            details="HTML/CSS, HTML5/CSS3, Javascript, React"
          />
        </div>
        <div style={{ top: "22rem", left: "18rem" }}>
          <Card
            emoji={humble}
            heading="Software Tester"
            details="Cypress, React Storybook"
          />
        </div>
        <div className="blur s-blur2" style={{ background: "#d7b8b8" }}></div>
      </div>
    </section>
  );
}

export default Service;
