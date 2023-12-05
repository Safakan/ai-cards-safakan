import React, { useState, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import './SwiperComponent.css';

const slideData = [
  { front: 'Text 1A', back: 'Text 1B' },
  { front: 'Text 2A', back: 'Text 2B' },
  { front: 'Text 3A', back: 'Text 3B' },
  // ... additional slides ...
];

const SwiperComponent = ( { deckData } ) => { // Accept deckData as prop
  const [flipped, setFlipped] = useState(Array(slideData.length).fill(false));
  const swiperRef = useRef(null); // Reference to the Swiper instance


  const handleFlip = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      console.log('Active Index:', swiper.activeIndex, 'Clicked Index:', index);


      if (swiper.realIndex === index) {
        // The clicked slide is already active, flip the card
        const newFlipped = [...flipped];
        newFlipped[index] = !newFlipped[index];
        setFlipped(newFlipped);
      } else {
        // The clicked slide is not active, slide to make it active
        swiper.slideToLoop(index);
      }
    }
  };

  const slides = deckData || slideData; // Use API response data if available, otherwise use default data

  return (
    <Swiper
      ref={swiperRef}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={false}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 80,
        depth: 110,
        modifier: 2.5,
      }}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      {slides.map((slide, index) => (
                  <SwiperSlide key={index} onClick={() => handleFlip(index)}>
            <div className={`flip-container ${flipped[index] ? 'flipped' : ''}`}>
              <div className="flipper">
                <div className="front">
                  <p className="slide-label">🤔💭❔💭🤔</p> {/* EMOJIS JUST SAYING THIS IS FRONT */}
                  <p>{slide.front}</p>
                </div>
                <div className="back">
                  <p className="slide-label">😲🎉🔍🎉😲</p> {/* EMOJIS JUST SAYING THIS IS BACK */}
                  <p>{slide.back}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
      ))}
      {/* ... Rest of the Swiper component ... */}
    </Swiper>
  );
};

export default SwiperComponent;
