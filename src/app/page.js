import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        <h2>Welcome to the Interactive Number Theory Playground!</h2>
      </div>
      <div className={styles.construction}>
        <h1>Playground Under Construction</h1>
        <br />
        <h2>The Number Theory App is done!</h2>
      </div>
      <div className={styles.description}>
        <div className={styles.description}>
          <p>This is a project built in React.js using the Next.js framework</p>
        </div>
        <div className={styles.description}>
          <p>
            It is a cool web-based interactive tool that allows users to explore
            various number theory concepts and set operations
          </p>
        </div>
      </div>
    </main>
  );
}
