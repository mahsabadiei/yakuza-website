"use client";
import { useEffect, useState } from "react";
import styles from "./preloader.module.scss";
import Home from "../home/home";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(false);
      clearInterval(interval);
    }, 10000);
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
