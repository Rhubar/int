import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background}></div>
      <div className={styles.backgroundColor}></div>
      <div className={styles.heading}>
        <h2>Welcome to the Interactive Number Theory Playground!</h2>
      </div>
      <div className={styles.about}>
        <p>
          It is a cool web-based interactive tool that allows users to explore
          various number theory concepts and set operations
        </p>
      </div>
      <div className={styles.cheer}>
        <h4>Go ahead and check it out!</h4>
      </div>
    </main>
  );
}
