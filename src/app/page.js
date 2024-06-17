import Image from "next/image";
import styles from "./page.module.css";
import PrimeNumbers from'./components/number theory/PrimeNumbers';

export default function Home() {
  return (
    <main className={styles.main}>

        <PrimeNumbers />

    </main>
  );
}
