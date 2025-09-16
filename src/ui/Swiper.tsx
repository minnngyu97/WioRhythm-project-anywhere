// BannerSwiper.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// import "../styles/swiper.css";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const BannerSwiper: React.FC = () => {
  return (
    <div className="md:w-screen mx-auto">
      <Swiper
        pagination={{ type: "fraction" }}
        navigation
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-[500px]"
      >
        {[
          "특가이벤트",
          "구독이벤트",
          "할인이벤트",
          "자동롤링해줘",
          "3초마다",
          "2개씩보이게해줘",
        ].map((v, i) => (
          <SwiperSlide
            key={i}
            className="flex items-center justify-center border rounded-lg bg-white shadow-sm"
          >
            {v}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSwiper;
