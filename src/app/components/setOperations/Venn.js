import React from "react";
import Image from "next/image";
import blank from "../assets/blank.png";
import complement from '../assets/complement.png';
import difference from '../assets/difference.png';
import intersection from '../assets/intersection.png';
import union from '../assets/union.png';

export default function Venn(props) {
  if (props.operation === "union") {
    return (
      <div>
        <Image
          src={union}
          alt="venn diagram where all parts of circles are filled in"
        />
      </div>
    );
  } else if (props.operation === "intersection") {
    return (
      <div>
        <Image
          src={intersection}
          alt="venn diagram where only the central overlapping area is filled in"
        />
      </div>
    );
  } else if (props.operation === "difference") {
    return (
      <div>
        <Image
          src={difference}
          alt="venn diagram where only the left circle is filled in but not at the intersection"
        />
      </div>
    );
  } else if (props.operation === "complement") {
    return (
      <div>
        <Image
          src={complement}
          alt="venn diagram where only the left circle and intersection are not filled in. Even the background is filled in"
        />
      </div>
    );
  } else {
    return (
      <div>
        <Image src={blank} alt="a blank venn diagram" />
      </div>
    );
  }
}
