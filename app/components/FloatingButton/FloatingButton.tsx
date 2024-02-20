import React from "react";
import Image from "next/image";
import styles from "./FloatingButton.module.css";

export default function FloatingButton({
  children,
  enableBadge,
}: Readonly<{ children: React.ReactNode; enableBadge?: boolean }>) {
  return (
    <button className={styles.floatingBtn}>
      <div className={`${styles.floatingBtnIcon}`}>{children}</div>
      {enableBadge && <span className={`${styles.floatingBadge}`}></span>}
    </button>
  );
}
