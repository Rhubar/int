import Accordion from "../Accordion";
import GCDfinder from './GCDfinder';
import "../styles/gcd.css";

export default function GCD(props) {
  // data for accordions
  const titleWhat = "What are they?";
  const contentWhat = (
    <p>
      <p>
        The greatest common divisor (GCD), also known as the greatest common
        factor or highest common factor, is the largest positive
        integer that divides each of the numbers in a given set without leaving
        a remainder
      </p>
    </p>
  );
  const titleWhy = "Why are they important?";
  const contentWhy = (
    <p>
      Algorithm Optimization: GCD can be used to optimize algorithms that deal
      with numbers, such as reducing fractions to their simplest form before
      performing operations on them
      <br /><br /> Cryptography: It's used in algorithms for public-key cryptography,
      where finding the GCD is essential for the encryption and decryption
      processes
      <br /><br />
      Data Compression: GCD can help in simplifying data before compression,
      which can make the compression more efficient.
      <br /><br />
      Graphics: When dealing with pixels and screen resolutions, GCD can be used
      to maintain aspect ratios when scaling images or videos
    </p>
  );

  if (props.topic === "gcd") {
    return (
            <div className="gcdDiv">
      <div className="gdcBackground"> </div>
      <div className="gdcBackColor"> </div>
        <h1>Greatest Common Divisors</h1>
        <div className="gcdAccordion">
          <Accordion title={titleWhat} content={contentWhat} />
        </div>
        <div className="gcdAccordion">
          <Accordion title={titleWhy} content={contentWhy} />
        </div>
        <div className="gcdFinder">
          <GCDfinder />
        </div>
        <div className="gcdExplain">
          <p>Enter 2 numbers to calculate their greatest common divisor</p>
          <br/>
          <p>This uses Euclid's algorithm, dividing the greater number by the smaller,
             then taking the remainder and dividing the smaller number by it,
             then taking that remainder and dividing the first remainder by it,
             and so on until 0 is reached. The last number that isn't 0 is the greatest common divisor. Phew!</p>
        </div>
      </div>
    );
  }
}
