import React, { useState } from "react";

// prime number checker
function PrimeFinder() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState("");
  //handler for user input, sets number state
  const handleChange = (event) => {
    // Math.round to only allow integers
    setNumber(Math.round(event.target.value));
  };

  //  checks if a number is prime on click
  function handleClick() {
    let isPrime = true;

    // check if number is greater than 1
    if (number > 1) {
      // looping from 2 to number -1
      for (let i = 2; i < number; i++) {
        // checks if the number is divisible by numbers other than 1 and itself
        // if the remainder is 0, that number is not prime
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }

      // sets state depending on result
      if (isPrime) {
        setResult(`The number ${number} is prime!`);
      } else {
        setResult(`The number ${number} is not prime`);
      }
    }
  }

  return (
    <div>
      <input type="number" value={number} onChange={handleChange}></input>
      <button onClick={handleClick}>Check</button>
      <p>{result}</p>
    </div>
  );
}

export default PrimeFinder;
