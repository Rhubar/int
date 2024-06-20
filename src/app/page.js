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
    </main>
  );
}
