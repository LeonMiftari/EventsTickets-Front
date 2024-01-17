import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Styles/swiper/swiper.scss';
import '../Styles/swiper/navigation.scss';
import '../Styles/swiper/pagination.scss';
import '../Styles/swiper/effect-coverflow.scss';

import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';

// Explicitly use SwiperCore modules
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Products = () => {
  const slideImages = [
    { image: "/images/mac.jpg" },
    { image: "/images/iphone15.jpg" },
    { image: "/images/concert.jpg" },
    { image: "/images/concert2.jpg" },
    { image: "/images/clasico.jpg" },
  ];

  return (
    <div className="swiper-container">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        pagination={{ clickable: true }}
        className="swiper_wrapper"
      >
        {slideImages.map((c, index) => (
          <SwiperSlide key={index}>
            <img src={c.image} alt={`slide_image_${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
