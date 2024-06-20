import React, { useState } from "react";

function GCDFinder() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [gcd, setGcd] = useState(null);

  // finds the GCD using Euclid's algorithm
  const findGCD = (a, b) => {
    // sets the largest number to a
    if (b > a) {
      let temp = a;
      a = b;
      b = temp;
    }
    // divides until b is 0, returns a
    while (b !== 0) {
      let remainder = a % b;
      a = b;
      b = remainder;
    }
    return a;
  };

  // sets state on click, runs findGCD
  const handleCalculateGCD = () => {
    setGcd(findGCD(number1, number2));
  };

  return (
    <div>
      <input
        type="number"
        placeholder="first number"
        value={number1}
        onChange={(e) => setNumber1(Math.round(e.target.value))}
      />
      <input
        type="number"
        placeholder="second number"
        value={number2}
        onChange={(e) => setNumber2(Math.round(e.target.value))}
      />
      <button onClick={handleCalculateGCD}>Calculate</button>
      {/* displays result */}
      {gcd !== null && <p>The GCD is: {gcd}</p>}
    </div>
  );
}

export default GCDFinder;
