import React from "react";
import "./Service.css";
import { heart, glasses, humble } from "../../assets";
import { Card } from "../../components";

function Service() {
  return (
    <section className="services">
      <div className="awesome">
        <span>My Wonderful</span>
        <span>Services</span>
        <span>
          I offer a variety of services, including the creation of responsive
          websites using <br />
          front-end technologies and the testing of software using the right
          tools.
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: "#d7b8b894" }}></div>
      </div>
      <div className="cards">
        <div>
          <Card
            emoji={heart}
            heading="Animation"
            details="Three.js, Framer Motion, Animate.css"
          />
        </div>
      </div>
    </section>
  );
}

export default Service;
