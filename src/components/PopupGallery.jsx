import React from 'react';
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
    { img: popupGalleryImg1 },
    { img: popupGalleryImg2 },
    { img: popupGalleryImg3 },
    { img: popupGalleryImg4 },
    { img: popupGalleryImg5 },
    { img: popupGalleryImg6 },
    { img: popupGalleryImg7 },
    { img: popupGalleryImg8 },
    { img: popupGalleryImg9 },
    { img: popupGalleryImg10 },
  ];

  const handleDownload = (imageUrl) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'image.png'; // Change the filename if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadImg = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M20 26.6667L11.6667 18.3333L14 15.9167L18.3333 20.25V6.66666H21.6667V20.25L26 15.9167L28.3333 18.3333L20 26.6667ZM10 33.3333C9.08334 33.3333 8.29889 33.0072 7.64667 32.355C6.99445 31.7028 6.66778 30.9178 6.66667 30V25H10V30H30V25H33.3333V30C33.3333 30.9167 33.0072 31.7017 32.355 32.355C31.7028 33.0083 30.9178 33.3344 30 33.3333H10Z" fill="#6A6A6A"/>
</svg>;

  return (
    <>    
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="popupgallery"
        >
        {popupGallery.map((item, index) => (
            <SwiperSlide key={index}>
            <img src={item.img} alt="" />
            <div className="download-btn" onClick={() => handleDownload(item.img)}>
            {downloadImg}
            </div>
            </SwiperSlide>
        ))}
        </Swiper>
    </>
    
  );
}
