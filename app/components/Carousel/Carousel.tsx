import React from "react";
import CarouselSlides, { Promo } from "./CarouselSlide";

export default async function Carousel() {
  const response = await fetch("https://api.testvalley.kr/main-banner/all");
  const promos: Promo[] = await response.json();

  return (
    <>
      <CarouselSlides promos={promos} />
    </>
  );
}
