"use client";
import React from "react";
import "../styles/primeNumbers.css";
import Accordion from "../Accordion";
import PrimeFinder from "./PrimeFinder";

function PrimeNumbers() {
  // data for accordions
  const titleWhat = "What are they?";
  const contentWhat = (
    <p>
      A Prime Number is a positive and whole number that is only
      divisible by 1 and itself
    </p>
  );
  const titleWhy = "Why are they important?";
  const contentWhy = (
    <p>
      Cryptography: Primes are used in encryption algorithms for secure data
      transmission
      <br />
      <br />
      Hash functions: Primes help in creating efficient and secure hash
      functions for data structures like hash tables
      <br />
      <br />
      Random number generation: Primes can be used to generate pseudo-random
      numbers, important for simulations and security
    </p>
  );

  return (
    <div className="primeDiv">
      <div className="primeBackground"></div>
      <div className="primeBackColor"></div>
      <h1>Prime Numbers</h1>
      <div className="primeAccordion">
        <Accordion title={titleWhat} content={contentWhat} />
      </div>
      <div className="primeAccordion">
        <Accordion title={titleWhy} content={contentWhy} />
      </div>
      <div className="primeFinder">
        <PrimeFinder />
      </div>
      <div className="explain">
        <p>Enter a number greater than 1 to check if it's a prime number</p>
        <br/><p>This works by checking every number up to yours, to see if your number can be divided by any of them with no remainder</p>
      </div>
    </div>
  );
}

export default PrimeNumbers;
