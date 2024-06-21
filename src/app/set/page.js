"use client";
import React from "react";
import SetCard from "../components/set operations/SetCard";
import "./set.css";

export default function Page() {
  // card customization
  const unionText =
    "Combines elements from both sets, creating a new set of all distinct elements";
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
    <div>
      <div className="setDiv">
        <h2 className="setHeading">Set Operations</h2>
      </div>
      <div className="setExplain">
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
      <div className="cardContainer">
        <SetCard
          color="red"
          heading="Union"
          symbol="∪"
          text={unionText}
          bottom={unionBottom}
          bottom2={unionBottom2}
        />
        <SetCard
          color="blue"
          heading="Intersection"
          symbol="∩"
          text={intersectionText}
          bottom={intersectionBottom}
          bottom2={intersectionBottom2}
        />
        <SetCard
          color="green"
          heading="Difference"
          symbol="\"
          text={differenceText}
          bottom={differenceBottom}
          bottom2={differenceBottom2}
        />
        <SetCard
          color="yellow"
          heading="Complement"
          symbol="ᶜ"
          text={complementText}
          bottom={complementBottom}
          bottom2={complementBottom2}
        />
      </div>
    </div>
  );
}
