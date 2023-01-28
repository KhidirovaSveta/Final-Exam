import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.scss";

// import required modules
import { Navigation } from "swiper";

import CarouselImg1 from "../../images/slide1.jpg"
import CarouselImg2 from "../../images/slide2.jpg"
import CarouselImg3 from "../../images/slide3.jpg"


const Carousel = () => {
  return (
    <div id='Carousel'>
      <>
      <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="carousel1">
          <img src={CarouselImg1} alt="" />
          <div className="info">
            <p className='subinfo'>Women Collection 2018</p>
            <h1 className='mainTextCarousel'>NEW SEASON</h1>
            <button className='carouselBtn'> SHOP NOW</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide> <div className="carousel1">
          <img src={CarouselImg2} alt="" />
          <div className="info">
            <p className='subinfo'>Men Collection 2018</p>
            <h1 className='mainTextCarousel'>NEW ARRIVALS</h1>
            <button className='carouselBtn'> SHOP NOW</button>
          </div>
          </div>
          </SwiperSlide>

        <SwiperSlide>
        <div className="carousel1">
          <img src={CarouselImg3} alt="" />
          <div className="info">
            <p className='subinfo'>Men New-Season 2018</p>
            <h1 className='mainTextCarousel'> JACKETS & COATS</h1>
            <button className='carouselBtn'> SHOP NOW</button>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
    </div>
  )
}

export default Carousel