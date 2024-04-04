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
import popuptoken from "../assets/img/popup-tokenImg.png";
import CopyToClipboard from './CopyToClipboard';
import popupRightImg from '../assets/img/popup-rightImg.png';
import PopupGallery from './PopupGallery';

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

  const afterOpenModal = () => {
    // Do nothing or define any necessary logic here
  };

  const openTokenModal = () => {
    setTokenModalIsOpen(true);
  };

  const closeTokenModal = () => {
    setTokenModalIsOpen(false);
  };

  const openGalleryModal = () => {
    setGalleryModalIsOpen(true);
  };

  const closeGalleryModal = () => {
    setGalleryModalIsOpen(false);
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
        onAfterOpen={afterOpenModal}
        onRequestClose={closeTokenModal}
        style={customStyles}
        contentLabel="Token Modal"
      >
        <button className='closeBtn' onClick={closeTokenModal}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
              <circle cx="12" cy="12" r="11.5" stroke="black" />
              <path d="M15.5472 15.9911C15.4889 15.9918 15.4312 15.9804 15.3777 15.9575C15.3242 15.9345 15.276 15.9007 15.2364 15.8581L8.13319 8.76275C7.9556 8.58537 7.9556 8.31042 8.13319 8.13304C8.31077 7.95565 8.58602 7.95565 8.7636 8.13304L15.8579 15.2372C16.0355 15.4146 16.0355 15.6896 15.8579 15.867C15.7691 15.9557 15.6537 16 15.5472 16V15.9911Z" fill="black" />
              <path d="M8.44395 15.9911C8.38573 15.9918 8.328 15.9804 8.27448 15.9574C8.22095 15.9345 8.17283 15.9007 8.13319 15.8581C7.9556 15.6807 7.9556 15.4057 8.13319 15.2284L15.2364 8.14189C15.414 7.9645 15.6892 7.9645 15.8668 8.14189C16.0444 8.31927 16.0444 8.59422 15.8668 8.7716L8.75472 15.8581C8.66593 15.9468 8.5505 15.9911 8.44395 15.9911Z" fill="black" />
            </g>
          </svg>
        </button>
        <div className='popup-content'>
          <h5>90% LP BURNT</h5>
          <h5>10% MARKETING WALLET</h5>
          <img src={popuptoken} alt="" />
          <p>FOR COLLABORATIONS AND EXCHANGE LISTINGS - NO TEAM TOKEN</p>
        </div>
        <img className='popupRightImg' src={popupRightImg} alt="" />
      </Modal>

      <Modal
        isOpen={galleryModalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeGalleryModal}
        style={customStyles}
        contentLabel="Gallery Modal"
      >
        <div className='popup-content'>
          <PopupGallery />
        </div>
      </Modal>
    </>
  )
}
