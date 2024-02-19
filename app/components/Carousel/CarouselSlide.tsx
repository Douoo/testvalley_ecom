"use client";
import React from "react";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

import styles from "./Carousel.module.css";
import "swiper/css";

export interface Promo {
  mainBannerId: number;
  title: string;
  mobileImageUrl: string;
  pcImageUrl: string;
  linkUrl: string;
}

export default function CarouselSlide({
  promos,
}: Readonly<{ promos: Promo[] }>) {
  return (
    <Swiper
      className={styles.carouselContainer}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      loop={true}
      pagination={{ clickable: false }}
    >
      <SlideNext />
      <SlidePrev />

      {promos.map((promo) => (
        <SwiperSlide key={promo.mainBannerId}>
          <img
            src={promo.mobileImageUrl}
            alt={promo.title}
            className={styles.smallDevice}
          />
          <img
            src={promo.pcImageUrl}
            alt={promo.title}
            className={styles.largeDevice}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function SlideNext() {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slideNext()}>
      <span className={`${styles.circleLayer} swiper-button-next`}></span>
    </button>
  );
}

export function SlidePrev() {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slidePrev()}>
      {" "}
      <span className={`${styles.circleLayer} swiper-button-prev`}></span>
    </button>
  );
}
