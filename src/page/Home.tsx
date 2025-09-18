// Home.tsx
// import { useParams } from "react-router-dom";
import SectionTitle from "../ui/SectionTitle";
import BannerSwiper from "../ui/BannerSwiper";
// import { HomeParams } from "../db/type/common";
import { LanguageData } from "../db/type/common";

const Home: React.FC<{ data: LanguageData }> = ({ data }) => {
  return (
    <section className="text-center">
      <BannerSwiper />
      <SectionTitle data={data.sectionTitle} />
    </section>
  );
};

export default Home;
