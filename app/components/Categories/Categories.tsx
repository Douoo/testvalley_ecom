import React from "react";
import styles from "./Categories.module.css";
import Image from "next/image";

interface Category {
  mainShortcutId: number;
  title: string;
  imageUrl: string;
  linkUrl: string;
}

export default async function Categories() {
  const response = await fetch("https://api.testvalley.kr/main-shortcut/all");
  const categories: Category[] = await response.json();

  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <div
          key={category.mainShortcutId}
          className="flex flex-col items-center w-16"
        >
          <Image
            className={styles.categoryIcon}
            src={category.imageUrl}
            alt={category.title}
            width="48"
            height="48"
          />
          <p className={styles.title}>{category.title}</p>
        </div>
      ))}
    </div>
  );
}
