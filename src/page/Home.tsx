// Home.tsx
// import { useParams } from "react-router-dom";
import BannerSwiper from "../ui/Swiper";
// import { HomeParams } from "../db/type/common";

const Home: React.FC = () => {
  // const { global } = useParams<HomeParams>();

  // const getLanguageLabel = () => {
  //   switch (global) {
  //     case "cn":
  //       return "중국어 홈컴포넌트를 제작한다.";
  //     case "en":
  //       return "영어 홈컴포넌트를 제작한다.";
  //     default:
  //       return "한국어 홈컴포넌트를 제작한다.";
  //   }
  // };

  return (
    <section className="py-10 text-center">
      <p className="mb-6 text-lg font-medium text-gray-700">
        {/* Language: {getLanguageLabel()} */}
      </p>
      <BannerSwiper />
    </section>
  );
};

export default Home;
