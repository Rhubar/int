import React, { useState } from "react";
import PrimeMessage from './PrimeMessage';

// prime number checker
function PrimeFinder() {
  const [number, setNumber] = useState(0);
  const [prime, setPrime] = useState(false);
  const [message, setMessage] = useState(null);
  //handler for user input, sets number state
  const handleChange = (event) => {
    // Math.round to only allow integers
    setNumber(Math.round(event.target.value));
  };

  //  checks if a number is prime on click
  function handleClick() {
    let isPrime = true;
    // sets the message state equal to number
    setMessage(number);

    // check if number is less than 2, and clears message if it is
    if (number < 2) {
      setMessage(null);
    }

    // check if number is greater than 1
    else if (number > 1) {
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
        setPrime(true);
      } else {
        setPrime(false);
      }
    }
  }

  return (
    <div>
      <h4>Prime Number Checker</h4>
      <input type="number" value={number} onChange={handleChange}></input>
      <button onClick={handleClick}>Check</button>
      <PrimeMessage prime={prime} message={message}/>
    </div>
  );
}

export default PrimeFinder;
