import React from "react";
import "./Works.css";
import {
  upwork,
  fiverr,
  Alabian,
  shopify,
  amazon,
  facebook,
} from "../../assets";

function Works() {
  return (
    <section className="works">
      <div className="awesome">
        <span>Works for All This</span>
        <span>Brands and Clients</span>
        <span>
          I built websites for a few clients both during and after my
          internship, <br />
          <span>
            including websites for churches, dating services, and more.
          </span>
        </span>
        <button className="button s-button">Hire Me!</button>
        <div className="blur s-blur1" style={{ background: "#ef999994" }}></div>
      </div>

      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={upwork} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={fiverr} alt="fiverr" />
          </div>
          <div className="w-secCircle">
            <img src={shopify} alt="shopify" />
          </div>
          <div className="w-secCircle">
            <img src={amazon} alt="alabian" />
          </div>
          <div className="w-secCircle">
            <img src={facebook} alt="facebook" />
          </div>
        </div>
        <div className="w-backCircle redCircle"></div>
        <div className="w-backCircle purpleCircle"></div>
      </div>
    </section>
  );
}

export default Works;
