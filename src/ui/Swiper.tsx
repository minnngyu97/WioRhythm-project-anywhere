import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import bannerData from "../db/mainBanner.json";

const BannerSwiper: React.FC = () => {
  return (
    <div className="md:w-screen mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper h-[800px]"
      >
        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={item.link}>
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-[800px] object-cover rounded-lg shadow-sm"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSwiper;
