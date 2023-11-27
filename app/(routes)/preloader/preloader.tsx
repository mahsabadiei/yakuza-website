"use client";
import { useEffect, useState } from "react";
import Home from "../home/home";
import styles from "./preloader.module.scss";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(false);
      clearInterval(interval);
    }, 5000);
  }, []);

  return isLoading ? (
    <section className={styles.container}>
      <p className={styles.text}>ヤクザの遺産</p>
      <div className={styles.axis}>
        <div className={styles.part} />
        <div className={styles.part} />
        <div className={styles.part} />
        <div className={styles.part} />
      </div>
    </section>
  ) : (
    <Home />
  );
}
