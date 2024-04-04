import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import popupGalleryImg1 from "../assets/img/boi1.png";
import popupGalleryImg2 from "../assets/img/boi2.png";
import popupGalleryImg3 from "../assets/img/boi3.png";
import popupGalleryImg4 from "../assets/img/boi4.png";
import popupGalleryImg5 from "../assets/img/boi5.png";
import popupGalleryImg6 from "../assets/img/boi6.png";
import popupGalleryImg7 from "../assets/img/boi8.png";
import popupGalleryImg8 from "../assets/img/boi9.png";
import popupGalleryImg9 from "../assets/img/boi10.png";
import popupGalleryImg10 from "../assets/img/boi11.png";


export default function PopupGallery() {
    const popupGallery = [
        {
          img: popupGalleryImg1,
        },
        {
          img: popupGalleryImg2,
        },
        {
          img: popupGalleryImg3,
        },
        {
          img: popupGalleryImg4,
        },
        {
          img: popupGalleryImg5,
        },
        {
          img: popupGalleryImg6,
        },
        {
          img: popupGalleryImg7,
        },
        {
          img: popupGalleryImg8,
        },
        {
          img: popupGalleryImg9,
        },
        {
          img: popupGalleryImg10,
        },
      ];
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {popupGallery.map((item, index)=>(
            <SwiperSlide key={index}> 
                <img src={item.img} alt="" />
            </SwiperSlide>
        ))}
      </Swiper>
  )
}
