import React from "react";

function NavBar() {
  return (
    <section className="n-wrapper">
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
        <button className="button">Contact Me</button>
      </div>
    </section>
  );
}

export default NavBar;
