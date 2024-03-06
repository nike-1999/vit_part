import React from "react";
import HeroSection from "./HeroSection";
import InfoBox from "./InfoBox";
import ImageSlider from "./ImageSider";
import HeroSection2 from "./HeroSection2";
import UpperFooter from "./UpperFooter";
const Home = () => {
  return (
    <div>
      <HeroSection />

      <InfoBox />
      <HeroSection2 />

      <ImageSlider />
      <UpperFooter />
    </div>
  );
};

export default Home;
