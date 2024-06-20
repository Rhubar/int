import Accordion from "../Accordion";
import PrimeFinder from "./PrimeFinder";

function PrimeNumbers(props) {
  // data for accordions
  const titleWhat = "What are they?";
  const contentWhat = (
    <p>
      A Prime Number is a positive and whole number that is only divisible by 1
      and itself
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

  // variables for classNames
  const primeBackground = "primeBackground";
  const background = "background";
  const primeDiv = "primeDiv";
  const mainDiv = "mainDiv";

  if (props.topic === "prime") {
    return (
      <div className={`${primeDiv} ${mainDiv}`}>
        <div className={`${primeBackground} ${background}`}></div>
        <div className="backgroundColor"></div>
        <h1>Prime Numbers</h1>
        <div className="accordionPlacement">
          <Accordion title={titleWhat} content={contentWhat} />
        </div>
        <div className="accordionPlacement">
          <Accordion title={titleWhy} content={contentWhy} />
        </div>
        <div className="finder">
          <h4>Prime Number Checker</h4>
          <br />
          <PrimeFinder />
        </div>
        <div className="primeExplain">
          <p>Enter a number greater than 1 to check if it's a prime number</p>
          <br />
          <p>
            This works by checking if your number can be divided by any other
            smaller number with no remainder
          </p>
        </div>
      </div>
    );
  }
}

export default PrimeNumbers;
