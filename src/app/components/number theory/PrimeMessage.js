import React from 'react';

// message that displays for prime number checker
export default function PrimeMessage(props){

    if (props.message != null) {return(
        <div>
            <p>The number {props.message} {props.prime ? "is prime!" : "is not prime"}</p>
        </div>
    )
}
}