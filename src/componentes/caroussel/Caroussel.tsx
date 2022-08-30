import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "./Caroussel.css";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Box } from "@mui/material";

 function Caroussel() {
  return (
    <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="Slide"><img src="https://i.imgur.com/0tDAP7l.png" alt="" /></SwiperSlide>
      <SwiperSlide className="Slide"><img src="https://i.imgur.com/5JD9RaL.png" alt="" /></SwiperSlide>
      <SwiperSlide className="Slide"><img src="https://i.imgur.com/9iqOl0b.png" alt="" /></SwiperSlide>
    </Swiper>
  </>
);
}


export default Caroussel;