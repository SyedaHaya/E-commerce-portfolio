import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper/modules";

import imgOne from "/src/assets/images/sponsor/01.png";
import imgTwo from "/src/assets/images/sponsor/02.png";
import imgThree from "/src/assets/images/sponsor/03.png";
import imgFour from "/src/assets/images/sponsor/04.png";
import imgFive from "/src/assets/images/sponsor/05.png";
import imgSix from "/src/assets/images/sponsor/06.png";

const sponsorList = [
  {
    imgUrl: imgOne,
  },
  {
    imgUrl: imgTwo,
  },
  {
    imgUrl: imgThree,
  },
  {
    imgUrl: imgFour,
  },
  {
    imgUrl: imgFive,
  },
  {
    imgUrl: imgSix,
  },
];

const Sponsor = () => {
  return (
    <div className="sponsor-section section-bg">
      <div className="container">
        <div className="section-wrapper">
          <div className="sponsor-slider">
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {sponsorList.map((val, i) => (
                <SwiperSlide key={i}>
                  <div className="sponsor-iten">
                    <div className="sponsor-thumb">
                      <img src={val.imgUrl} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
