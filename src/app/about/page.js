import "./about.css";

export default function Page() {
  return (
    <div>
      <div className="about">
        <p>This is a portfolio project by Alexander Szwabowicz</p>
        <p>
          Check out the code on{" "}
          <a href="https://github.com/Rhubar/int">GitHub</a>
        </p>
        <p>
          Feel free to contact me on{" "}
          <a href="www.linkedin.com/in/alexander-szwabowicz">LinkedIn</a>
        </p>
      </div>
      <div className="about">
        <p>This is a project built in React.js using the Next.js framework</p>
        <p>
          It is a cool web-based interactive tool that allows users to explore
          various number theory concepts and set operations
        </p>
      </div>
    </div>
  );
}
