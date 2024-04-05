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
import popupGalleryImg11 from "../assets/img/boi12.png";
import popupGalleryImg12 from "../assets/img/boi13.png";
import popupGalleryImg13 from "../assets/img/boi14.png";
import popupGalleryImg14 from "../assets/img/boi15.png";
import popupGalleryImg15 from "../assets/img/boi16.png";
import popupGalleryImg16 from "../assets/img/boi17.png";
import popupGalleryImg17 from "../assets/img/boi18.png";
import popupGalleryImg18 from "../assets/img/boi19.png";
import popupGalleryImg19 from "../assets/img/boi20.png";
import popupGalleryImg20 from "../assets/img/boi21.png";
import popupGalleryImg21 from "../assets/img/boi22.png";
import popupGalleryImg22 from "../assets/img/boi23.png";
import popupGalleryImg23 from "../assets/img/boi24.png";
import popupGalleryImg24 from "../assets/img/boi25.png";
import popupGalleryImg25 from "../assets/img/boi26.png";
import popupGalleryImg26 from "../assets/img/boi27.png";
import popupGalleryImg27 from "../assets/img/boi28.png";
import popupGalleryImg28 from "../assets/img/boi30.png";
import popupGalleryImg29 from "../assets/img/boi31.png";
import popupGalleryImg30 from "../assets/img/boi32.png";
import popupGalleryImg31 from "../assets/img/boi33.png";
import popupGalleryImg32 from "../assets/img/boi34.png";
import popupGalleryImg33 from "../assets/img/boi35.png";
import popupGalleryImg34 from "../assets/img/boi36.png";
import popupGalleryImg35 from "../assets/img/boi37.png";
import popupGalleryImg36 from "../assets/img/boi38.png";
import popupGalleryImg37 from "../assets/img/boi39.png";
import popupGalleryImg38 from "../assets/img/boi40.png";
import popupGalleryImg39 from "../assets/img/boi41.png";
import popupGalleryImg40 from "../assets/img/boi42.png";
import popupGalleryImg41 from "../assets/img/boi43.png";
import popupGalleryImg42 from "../assets/img/boi44.png";
import popupGalleryImg43 from "../assets/img/boi45.png";
import popupGalleryImg44 from "../assets/img/boi46.png";
import popupGalleryImg45 from "../assets/img/boi47.png";
import popupGalleryImg46 from "../assets/img/boi48.png";
import popupGalleryImg47 from "../assets/img/boi49.png";

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
    { img: popupGalleryImg11 },
    { img: popupGalleryImg12 },
    { img: popupGalleryImg13 },
    { img: popupGalleryImg14 },
    { img: popupGalleryImg15 },
    { img: popupGalleryImg16 },
    { img: popupGalleryImg17 },
    { img: popupGalleryImg18 },
    { img: popupGalleryImg19 },
    { img: popupGalleryImg20 },
    { img: popupGalleryImg21 },
    { img: popupGalleryImg22 },
    { img: popupGalleryImg23 },
    { img: popupGalleryImg24 },
    { img: popupGalleryImg25 },
    { img: popupGalleryImg26 },
    { img: popupGalleryImg27 },
    { img: popupGalleryImg28 },
    { img: popupGalleryImg29 },
    { img: popupGalleryImg30 },
    { img: popupGalleryImg31 },
    { img: popupGalleryImg32 },
    { img: popupGalleryImg33 },
    { img: popupGalleryImg34 },
    { img: popupGalleryImg35 },
    { img: popupGalleryImg36 },
    { img: popupGalleryImg37 },
    { img: popupGalleryImg38 },
    { img: popupGalleryImg39 },
    { img: popupGalleryImg40 },
    { img: popupGalleryImg41 },
    { img: popupGalleryImg42 },
    { img: popupGalleryImg43 },
    { img: popupGalleryImg44 },
    { img: popupGalleryImg45 },
    { img: popupGalleryImg46 },
    { img: popupGalleryImg47 },
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
