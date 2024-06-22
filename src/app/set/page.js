"use client";
import React, { useState } from "react";
import SetCard from "../components/setOperations/SetCard";
import Venn from "../components/setOperations/Venn";
import styles from "../page.module.css";

export default function Page() {
  // state for venn diagram display
  const [operation, setOperation] = useState("");

  // onClick handlers
  function compClick() {
    setOperation("complement");
  }
  function unionClick() {
    setOperation("union");
  }
  function interClick() {
    setOperation("intersection");
  }
  function differenceClick() {
    setOperation("difference");
  }

  // card text
  const unionText = `Combines elements from both sets, creating a new set of all distinct elements`;
  const unionBottom = `A = 1, 2, 3, 4 and B = 3, 4, 5, 6`;
  const unionBottom2 = `A ∪ B = 1, 2, 3, 4, 5, 6`;
  const intersectionText = `Yields the set of common elements`;
  const intersectionBottom = `A = 1, 2, 3, 4 and B = 3, 4, 5, 6`;
  const intersectionBottom2 = `A ∩ B = 3, 4`;
  const differenceText = `Elements in one set that are not in another`;
  const differenceBottom = `A = 1, 2, 3, 4 and B = 3, 4, 5, 6`;
  const differenceBottom2 = `A \\ B = 1, 2`;
  const complementText = `All elements not in a set`;
  const complementBottom = `A = 1, 2, 3, 4`;
  const complementBottom2 = `Aᶜ = Everything apart from 1, 2, 3 and 4`;

  return (
    <div className={styles.main}>
      <div className={styles.background}></div>
      <div className={styles.backgroundColor}></div>
      <div className={styles.heading}>
        <h2>Set Operations</h2>
      </div>
      <div className={styles.about}>
        <h4>What is a set?</h4>
        <br />
        <p>
          A set in mathematics is simply a collection of different elements.
          Elements can be anything at all! But usually they're mathematical
          objects, numbers, symbols, geometrical shapes, ect. Even other sets
          can be elements! Elements that are in sets should share some common
          attribute that makes sense to group them together.
          <br />
          <br />
          Set operations are essential in computer science, and are used in
          things like data structures and algorithms.
        </p>
      </div>
      <div className={styles.vennDiv}>
        <Venn operation={operation} />
      </div>
      <div className={styles.about}>
        <h4>
          Click on one of the cards below to see a visual representation in the
          Venn diagram
        </h4>
      </div>
      <div className={styles.cardContainer}>
        <div onClick={unionClick}>
          <SetCard
            color="lightcoral"
            heading="Union"
            symbol="∪"
            text={unionText}
            bottom={unionBottom}
            bottom2={unionBottom2}
          />
        </div>
        <div onClick={interClick}>
          <SetCard
            color="aquamarine"
            heading="Intersection"
            symbol="∩"
            text={intersectionText}
            bottom={intersectionBottom}
            bottom2={intersectionBottom2}
          />
        </div>
        <div onClick={differenceClick}>
          <SetCard
            color="darkslategray"
            heading="Difference"
            symbol="\"
            text={differenceText}
            bottom={differenceBottom}
            bottom2={differenceBottom2}
          />
        </div>
        <div onClick={compClick}>
          <SetCard
            color="khaki"
            heading="Complement"
            symbol="ᶜ"
            text={complementText}
            bottom={complementBottom}
            bottom2={complementBottom2}
          />
        </div>
      </div>
      <div className={styles.vennDiv}>
        <Venn operation={operation} />
      </div>
    </div>
  );
}
