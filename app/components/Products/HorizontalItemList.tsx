"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import ProductCard, { Item } from "./ProductCard";

export default function HorizontalItemList({
  items,
  className,
}: Readonly<{ items: Item[]; className?: string }>) {
  return (
    <Swiper
      className={`w-full ${className}`}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={8}
      slidesPerView={4}
      modules={[Autoplay]}
    >
      {items.map((item) => (
        <SwiperSlide key={item.publication.id}>
          <ProductCard product={item.publication} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
