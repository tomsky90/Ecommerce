import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";
import "./home.scss";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type={"featured"} />
      <Categories />
      <FeaturedProducts type={"trending"} />
      <ContactBanner />
    </div>
  );
};

export default Home;
