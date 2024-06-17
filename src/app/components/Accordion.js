import React, { useState } from "react";
import "./styles/accordion.css";

function Accordion(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="accordion">
        <div className="accordionItem">
          <div
            className="accordionTitle"
            onClick={() => setIsActive(!isActive)}
          >
            <div>{props.title} </div>
            <div className="activeDiv">{isActive ? "-" : "+"}</div>
          </div>
          {isActive && <div className="accordionContent">{props.content}</div>}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
