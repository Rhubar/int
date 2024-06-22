import React from "react";
import NumberApp from "/src/app/components/numberTheory/NumberApp.js";
import styles from "../page.module.css";

export default function Page() {
  return (
    <div className={styles.numberPageMain}>
      <div className={styles.background}></div>
      <div className={styles.backgroundColor}></div>
      <NumberApp />
    </div>
  );
}
