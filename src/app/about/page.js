import styles from "../page.module.css";

export default function Page() {
  return (
    <div className={styles.main}>
      <div className={styles.about}>
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
      <div className={styles.about}>
        <p>
          This is a project built in React.js using the Next.js framework
          <br />
          <br />
          Optimised for desktop and mobile
        </p>
      </div>
    </div>
  );
}
