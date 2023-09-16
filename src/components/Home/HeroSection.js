/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const HeroSection = () => {
  return (
    <div className="-z-10">
      <span>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <img
              className="w-screen md:h-screen h-[40vh]"
              src="https://www.pchouse.com.bd/image/cache/catalog/banner/slider/new%20website%20slider/paloon%20(1)-960x450.png.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-screen md:h-screen h-[40vh]"
              src="https://www.pchouse.com.bd/image/cache/catalog/banner/banner/03-960x450.png.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-screen md:h-screen h-[40vh]"
              src="https://www.pchouse.com.bd/image/cache/catalog/banner/slider/new%20website%20slider/02-laptop-960x450.png.webp"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </span>
    </div>
  );
};

export default HeroSection;
