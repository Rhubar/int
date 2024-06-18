import "../styles/mod.css";
import Accordion from "../Accordion";

function ModularArithmetic(props) {
  // accordion data
  const titleWhat = "What is it?";
  const contentWhat = (
    <p>
      Modular arithmetic is a type of arithmetic where numbers "wrap around" after they
      reach a certain value — the modulus. For example, think of an analogue
      clock. 3 hours after 11 is 2, since after reaching 12 it resets to 0.
    </p>
  );
  const titleWhy = "Why is it important?";
  const contentWhy = (
    <p>
      Modular arithmetic helps manage the cyclical nature of many processes
      <br />
      <br />
      Cryptography: It's fundamental for algorithms in encryption
      <br />
      <br />
      Hash functions: These use modular arithmetic to convert large datasets
      into fixed-size integers known as hash values
      <br />
      <br />
      Graphics: To create patterns or manage circular arrays
      <br />
      <br />
      Algorithms: To keep integers within a fixed range to prevent overflow
    </p>
  );

//  to do: interactive - find modulus of two numbers? 
  if (props.topic === "mod") {
    return (
      <div className="modDiv">
        <div className="modBackground"></div>
        <div className="modBackColor"></div>
        <h1>Modular Arithmetic</h1>
        <div className="modAccordion">
          <Accordion title={titleWhat} content={contentWhat} />
        </div>
        <div className="modAccordion">
          <Accordion title={titleWhy} content={contentWhy} />
        </div>
      </div>
    );
  }
}

export default ModularArithmetic;
