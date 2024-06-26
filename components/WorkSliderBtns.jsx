"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();

  if (!swiper) {
    console.error('Swiper instance not found. Ensure WorkSliderBtns is used within a Swiper context.');
    return null;
  }

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()} aria-label="Previous slide">
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()} aria-label="Next slide">
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
