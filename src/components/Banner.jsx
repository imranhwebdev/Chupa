import React, { useRef, useEffect, useState } from 'react';
import Modal from 'react-modal';
import bannerTopImg from "../assets/img/heroTopImg.png";
import btnImg from "../assets/img/btnImg.png";
import workintImg from "../assets/img/workintImg.png";
import herotopleftImg from "../assets/img/herotopleftImg.png";
import herotoprightImg from "../assets/img/herotoprightImg.png";
import commentLeft from "../assets/img/comment-left.png";
import commentRight from "../assets/img/comment-right.png";
import heroBottomRightImg from "../assets/img/heroBottomRightImg.png";
import CopyToClipboard from './CopyToClipboard';
import tokenomicsTopImg from '../assets/img/tokenContentImg.png';
import close from '../assets/img/close.png';
import PopupGallery from './PopupGallery';
import Gallery from './Gallery';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Banner() {
  const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const startDrawing = (e) => {
      isDrawingRef.current = true;
      [lastXRef.current, lastYRef.current] = [e.clientX, e.clientY];
    };

    const draw = (e) => {
      if (!isDrawingRef.current) return;

      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#000';

      ctx.beginPath();
      ctx.moveTo(lastXRef.current, lastYRef.current);
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();

      [lastXRef.current, lastYRef.current] = [e.clientX, e.clientY];
    };

    const stopDrawing = () => {
      isDrawingRef.current = false;
    };

    const toggleDrawing = (e) => {
      if (!isDrawingRef.current) {
        startDrawing(e);
      } else {
        stopDrawing();
      }
    };

    canvas.addEventListener('mousedown', toggleDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    // Resize canvas with window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousedown', toggleDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
    };
  }, []);

  const resetCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  
  const [tokenModalIsOpen, setTokenModalIsOpen] = useState(false);
  const [galleryModalIsOpen, setGalleryModalIsOpen] = useState(false);
  const [popupGalleryModalIsOpen, setPopupGalleryModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openTokenModal = () => setTokenModalIsOpen(true);
  const closeTokenModal = () => setTokenModalIsOpen(false);
  const openGalleryModal = () => setGalleryModalIsOpen(true);
  const closeGalleryModal = () => setGalleryModalIsOpen(false);
  const closePopupGallery = () => setPopupGalleryModalIsOpen(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    openPopupGallery();
  };

  const openPopupGallery = () => {
    setGalleryModalIsOpen(false);
    setTokenModalIsOpen(false);
    setPopupGalleryModalIsOpen(true);
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        id="drawingCanvas"
        style={{ border: '1px solid black' }}
      />
      <section className='banner-area'>
        <div className="container">
          <figure className='herotopleftImg'>
            <img src={herotopleftImg} alt="" />
          </figure>
          <figure className='commentLeft' onClick={openTokenModal}>
            <img src={commentLeft} alt="" /> <span>TOKENOMICS</span>
          </figure>

          <figure className='herotoprightImg'>
            <img src={herotoprightImg} alt="" />
          </figure>
          <figure className='commentRight' onClick={resetCanvas}>
            <img src={commentRight} alt="" /> <span>RESET DRAWING</span>
          </figure>
          <div className="banner-content">
            <div className="banner-topImg">
              <p>Click To Draw</p>
              <img src={bannerTopImg} alt="" />
            </div>
            <h1>$boi</h1>
            <h3>boi iz happy</h3>
            <h2>BOI WANNA BUY</h2>
            <div className="btns">
              <figure className='workintImg'>
                <img src={workintImg} alt="" />
              </figure>
              <a href="#" className='boxed-btn'>BUY NOW</a>
              <a target='_blank' onClick={openGalleryModal} className='boxed-btn'>MEME GALLERY <img src={btnImg} alt="" /></a>
            </div>
            <CopyToClipboard />
          </div>
        </div>

        <figure className='bottomRightImg'>
          <img src={heroBottomRightImg} alt="" />
        </figure>
      </section>

      <Modal
        isOpen={tokenModalIsOpen}
        onRequestClose={closeTokenModal}
        style={customStyles}
        contentLabel="Token Modal"
      >
        <button className='closeBtn' onClick={closeTokenModal}>
          <img src={close} alt="" />
        </button>
        <div className='popup-content'>
          <figure className="tokenContent-inner">
            <img className='popupRightImg' src={tokenomicsTopImg} alt="" />
          </figure>
        
          <div className="tokenModal btns">
            <a href="#" className='boxed-btn'>BUY NOW</a>
            <a target='_blank' onClick={openGalleryModal} className='boxed-btn'>MEME GALLERY <img src={btnImg} alt="" /></a>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={galleryModalIsOpen}
        onRequestClose={closeGalleryModal}
        style={customStyles}
        contentLabel="Gallery Modal"
      >
        <button className='closeModal' onClick={closeGalleryModal}>
          <img src={close} alt="" />
        </button>
        <div className='popup-content gallery'>
          <Gallery onImageClick={handleImageClick} />
        </div>
      </Modal>

      <Modal
        isOpen={popupGalleryModalIsOpen}
        onRequestClose={closePopupGallery}
        style={customStyles}
        contentLabel="Popup Gallery Modal"
      >
        <button className='closeModal' onClick={closePopupGallery}>
          <img src={close} alt="" />
        </button>
        <div className='popup-content gallery'>
          <PopupGallery image={selectedImage} />
        </div>
      </Modal>
    </>
  );
}
