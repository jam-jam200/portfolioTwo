import React from "react";
import "./FloatingDiv.css"

function FloatingDiv({ image, txt1, txt2 }) {
  return (
    <section className="floatingDiv">
      <img src={image} alt="" />
      <span>
        {txt1} <br /> {txt2}
      </span>
    </section>
  );
}

export default FloatingDiv;
