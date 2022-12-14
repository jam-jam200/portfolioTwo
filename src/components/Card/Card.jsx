import React from "react";
import "./Card.css"

function Card({ emoji, heading, details }) {
  return (
    <div className="card">
      <img src={emoji} alt={details} />
      <span>{heading}</span>
      <span>{details}</span>
    </div>
  );
}

export default Card;
