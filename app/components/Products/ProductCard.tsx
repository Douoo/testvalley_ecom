import React from "react";
import Image from "next/image";
import styles from "./ProductCard.module.css";

interface MediaImage {
  seq: number;
  type: string;
  uri: string;
  mimeType: string;
  deviceType: string | null;
}

interface Price {
  price: number;
  discountPrice: number;
  discountRate: number;
  couponDiscountPrice: number;
  couponDiscountRate: number;
}

interface Discount {
  id: number;
  name: string | null;
  type: string;
  calcMethod: string;
  value: number;
  activeFrom: string | null;
  activeTo: string | null;
  qty: number;
  remain: number | null;
}
interface Product {
  id: number;
  title: string;
  code: string;
  productId: number;
  prdType: number;
  detailEntity: string;
  offeringType: string;
  rating: number;
  isAdult: number;
  preface: string;
  prefaceIconUrl: string;
  productName: string;
  brandName: string;
  media: MediaImage[];
  isTrial: boolean;
  tagsOnImage: string[];
  tagsOnDesc: string[];
  priceInfo: Price;
  discounts: Discount[];
  applyCoupon: boolean;
}

export interface Item {
  uuid: string;
  name: string;
  collectionId: number;
  key: string;
  seq: number;
  entityType: string;
  entityId: number;
  optionKey: string | null;
  publication: Product;
  prdType: number;
}

const IMAGE_URL = "https://dvd6ljcj7w3pj.cloudfront.net/media/COLLECTION";

export default function ProductCard({
  product,
}: Readonly<{ product: Product }>) {
  const formatPrice = (price: number): string => {
    const priceString = price.toString();
    const formattedPrice = priceString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return formattedPrice;
  };
  return (
    <div className={styles.product}>
      <div className={styles.productImage}>
        <img src={`${product.media[0].uri}`} alt="" />
        {product.tagsOnImage.length > 0 && (
          <span className={styles.productImgTag}>
            <img src="return-arrow.svg" alt="returnable" />
            {product.tagsOnImage[0]}
          </span>
        )}
      </div>

      <p className={styles.productTitle}>{product.title}</p>
      <p className={styles.productPrice}>
        {product.priceInfo.discountPrice ? (
          <>
            <span className={styles.productDiscount}>
              {product.priceInfo.discountRate}%
            </span>
            {formatPrice(product.priceInfo.discountPrice)}
          </>
        ) : (
          formatPrice(product.priceInfo.price)
        )}
      </p>
      {product.tagsOnDesc[0] && (
        <span className={styles.productTag}>{product.tagsOnDesc[0]}</span>
      )}
      {product.preface && (
        <span className={styles.productPreface}>
          <Image
            src={product.prefaceIconUrl}
            alt="preface icon"
            width="12"
            height="12"
          />
          {product.preface}
        </span>
      )}
      <p className={styles.productRating}>
        <Image src="./star.svg" alt="rating" width="12" height="12" />
        {product.rating}
      </p>
    </div>
  );
}
