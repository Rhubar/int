import React, { useState } from 'react';

function ModulusCalculator() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

// when button is clicked, if number 1 & 2 are true, displays the modulus, 
// else prompts user to input two numbers
  const handleClick = () => {
    if (number1 && number2) {
      const modulus = parseInt(number1) % parseInt(number2);
      setResult(`Modulus: ${modulus}`);
    } else {
      setResult('Please enter two numbers');
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="First number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Second number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />
      <button onClick={handleClick}>Calculate</button>
      <p>{result}</p>
    </div>
  );
}

export default ModulusCalculator;
