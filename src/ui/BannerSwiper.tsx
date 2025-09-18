import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import bannerData from "../db/mainBanner.json";

const BannerSwiper: React.FC = () => {
  return (
    <div className="">
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
          <div className="relative w-full h-[800px]">
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30">
              <h2 className={item.titleClass}>{item.title}</h2>
              <p className={item.subtitleClass}>{item.subtitle}</p>
              <Link
                to={item.button.link}
                className={`px-6 py-3 rounded-md transition-colors ${item.button.className}`}
              >
                {item.button.label}
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
};

export default BannerSwiper;
