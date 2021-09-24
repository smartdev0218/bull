import HeroSection from "../Components/HeroSection/HeroSection";
import HowItWorks from "../Components/HowItWork/HowItWorks";
import RoadMap from "../Components/RoadMap/RoadMap";
import Team from "../Components/Team/Team";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <RoadMap />
      <Team />               
      <Footer />
    </>
  );
};

export default Home;
