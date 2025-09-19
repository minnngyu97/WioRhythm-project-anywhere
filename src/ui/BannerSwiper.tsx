import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import bannerDataJson from "../db/mainBanner.json";
import { BannerData } from "../db/type/common"; // 방금 만든 타입 import

interface BannerSwiperProps {
  leng: "kr" | "en" | "cn" | "jp";
}

// JSON을 타입으로 캐스팅
const bannerData = bannerDataJson as BannerData;

const BannerSwiper: React.FC<BannerSwiperProps> = ({ leng }) => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper h-[800px]"
      >
        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-[800px]">
              <img
                src={item.image}
                alt={item.alt[leng] as string}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-center text-white p-[40px]">
                {/* 제목 */}
                <div className="flex flex-col mb-[30px]">
                  {item.title[leng] &&
                    [item.title[leng]].flat().map((line, idx, arr) => (
                      <h2
                        key={idx}
                        className={`${item.titleClass} text-[80px] flex items-center`}
                      >
                        {line}
                        {idx === arr.length - 1 && item.titleIcon && (
                          <img
                            src={item.titleIcon}
                            alt="title icon"
                            className="w-[100px] h-[100px]"
                          />
                        )}
                      </h2>
                    ))}
                  </div>

                {/* 서브타이틀 (한 줄 / 여러 줄 / 없음) */}
                <div className="flex flex-col gap-[10px]">
                  {item.subtitle[leng] &&
                    [item.subtitle[leng]].flat().map((line, idx) => (
                      <p key={idx} className={`${item.subtitleClass} text-start text-[30px] leading-[1.2]`}>
                        {line}
                      </p>
                    ))}
                </div>

                {/* 버튼 */}
                <Link
                  to={item.button.link}
                  className={`relative font-light w-[135px] flex items-start flex-col mt-[80px]  ${item.button.className}`}
                >
                  {item.button.label[leng]}
                  {item.button.icon && (
                    <img src={item.button.icon} alt="icon" className="absolute left-[-7px] bottom-[-9px] w-[135px]" />
                  )}
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
