import React from "react";
import { Item } from "./ProductCard";
import styles from "./ProductList.module.css";
import HorizontalItemList from "./HorizontalItemList";
import VerticalItemList from "./VerticalItemtList";

interface Deal {
  id: number;
  type: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  viewType: string;
  items: Item[];
}

export default async function ProductList() {
  const response = await fetch(
    "https://api.testvalley.kr/collections?prearrangedDiscount"
  );
  const data = await response.json();
  const deals: Deal[] = data["items"];

  return (
    <div className={styles.productsDeal}>
      {deals
        .filter((deal) => deal.items.length > 0)
        .map((deal) => (
          <div key={deal.id} className={`${styles.productsView}`}>
            <div className={styles.deal}>
              <h3 className="font-bold">{deal.title}</h3>
              <h4>{deal.subtitle}</h4>
              {/* <SlideNext /> */}
              {/* <SlidePrev /> */}
            </div>
            <HorizontalItemList className={styles.slider} items={deal.items} />
            <VerticalItemList
              className="md:hidden lg:block"
              items={deal.items}
            />
          </div>
        ))}
    </div>
  );
}
