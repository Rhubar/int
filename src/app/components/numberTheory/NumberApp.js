"use client";
import React, { useState } from "react";
import "../styles/numberApp.css";

import Landing from "./Landing";
import PrimeNumbers from "./PrimeNumbers";
import GCD from "./GCDivisors";
import ModularArithmetic from "./ModularArithmetic";

// app that switches between topics based on state
function NumberApp() {
  const [topic, setTopic] = useState("landing");

  // button onclick events setting state
  function primeClick() {
    setTopic("prime");
  }
  function gcdClick() {
    setTopic("gcd");
  }
  function modClick() {
    setTopic("mod");
  }

  // variables for classNames
  const primeTab = "primeTab";
  const gcdTab = "gcdTab";
  const modTab = "modTab";
  const tab = "tab";

  return (
    <div className="numberApp">
      <div>
        <button className={`${primeTab} ${tab}`} onClick={primeClick}>
          Prime Numbers
        </button>
        <button className={`${gcdTab} ${tab}`} onClick={gcdClick}>
          GCD
        </button>
        <button className={`${modTab} ${tab}`} onClick={modClick}>
          Modular Arithmetic
        </button>
      </div>
      <Landing topic={topic} />
      <PrimeNumbers topic={topic} />
      <GCD topic={topic} />
      <ModularArithmetic topic={topic} />
    </div>
  );
}

export default NumberApp;
