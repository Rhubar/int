import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        <h2>Welcome to the Interactive Number Theory Playground!</h2>
      </div>
      <div className={styles.construction}>
        <h1>The playground is almost complete!</h1>
        <br />
        <h2>Just some finishing touches to go</h2>
      </div>
    </main>
  );
}
