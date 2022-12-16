import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Navigation,Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box } from '@mui/material';
import SectionTitle from '../SectionTitle/SectionTitle';
import SingleReview from './SingleReview';
import './sty.css'
const Testimonial = () => {
    return (
        <Box sx={{my:10}}>
          <SectionTitle
          title="Here are some of"
          colored="our works"
          sx={{
            textAlign: "left",
            
          }}
        />
      <Swiper
        
        spaceBetween={10}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
         
         
         


         
         
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
       
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><SingleReview></SingleReview></SwiperSlide>
        <SwiperSlide><SingleReview></SingleReview></SwiperSlide>
        <SwiperSlide><SingleReview></SingleReview></SwiperSlide>
        <SwiperSlide><SingleReview></SingleReview></SwiperSlide>
        <SwiperSlide><SingleReview></SingleReview></SwiperSlide>
        <SwiperSlide><SingleReview></SingleReview></SwiperSlide>
        
      </Swiper>
    </Box>
    );
};

export default Testimonial;