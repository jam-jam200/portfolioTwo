import React from "react";
import "./Navbar.css";

function NavBar() {
  return (
    <section className="n-wrapper" style={{ display: "none" }}>
      <div className="n-left">
        <div className="n-name">Jessica</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experiences</li>
            <li>Portfolio</li>
          </ul>
        </div>
        <button className="button n-button">Contact Me</button>
      </div>
    </section>
  );
}

export default NavBar;
