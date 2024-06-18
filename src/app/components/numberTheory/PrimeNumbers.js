import React from "react";
import "../styles/primeNumbers.css";
import Accordion from "../Accordion";
import PrimeFinder from "./PrimeFinder";

function PrimeNumbers(props) {
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

if (props.topic === "prime"){
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
      <div className="primeExplain">
        <p>Enter a number greater than 1 to check if it's a prime number</p>
        <br/><p>This works by checking if your number can be divided by any other smaller number with no remainder</p>
      </div>
    </div>
  );
}
}

export default PrimeNumbers;
