"use client";
import React, { useState } from "react";
import '../styles/numberApp.css';

import Landing from './Landing';
import PrimeNumbers from './PrimeNumbers';
import GCD from './GCDivisors';

// app that switches between topics based on state
function NumberApp() {
    const [topic, setTopic] = useState("landing");

    // button onclick events setting state
    function primeClick(){
        setTopic("prime");
    }
    function gcdClick(){
        setTopic("gcd");
    }


    return(
        <div className="numberApp">
            <div>
                <button className="primeButton" onClick={primeClick}>Prime Numbers</button>
                <button className="gcdButton" onClick={gcdClick}>Greatest Common Divisors</button>
            </div>
            <Landing topic={topic} />
            <PrimeNumbers topic={topic}/>
            <GCD topic={topic}/>
        </div>
    );
}

export default NumberApp;