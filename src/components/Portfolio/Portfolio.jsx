import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { sidebar, hoc, musicapp, ecommerce } from "../../assets";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={musicapp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hoc} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Portfolio;
