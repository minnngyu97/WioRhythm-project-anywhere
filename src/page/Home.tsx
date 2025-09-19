import SectionTitle from "../ui/SectionTitle";
import BannerSwiper from "../ui/BannerSwiper";
import sectionTitleData from "../db/sectionTitle.json";

interface HomeProps {
  leng: "kr" | "en";
}

const Home: React.FC<HomeProps> = ({ leng }) => {
  const sectionTitle = sectionTitleData[leng].sectionTitle;

  return (
    <section className="text-center">
      <BannerSwiper leng={leng} />
      <SectionTitle data={sectionTitle} />
    </section>
  );
};

export default Home;
