import React from 'react'
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

const Gallery = ({ onImageClick }) => {
    const images = [
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
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.img}
          onClick={() => onImageClick(image)}
        />
      ))}
    </div>
  );
};

export default Gallery;
