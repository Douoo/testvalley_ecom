"use client";
import React from "react";

import ProductCard, { Item } from "./ProductCard";
import styles from "./ProductList.module.css";

export default function VerticalItemList({
  items,
  className,
}: Readonly<{ items: Item[]; className?: string }>) {
  return (
    <div className={`${styles.products}`}>
      {items.map((item) => (
        <ProductCard key={item.publication.id} product={item.publication} />
      ))}
    </div>
  );
}
