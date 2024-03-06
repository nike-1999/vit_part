import AboutUs from "./Components/AboutUs";
import BelowVitPark from "./Components/BelowVitPark";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Home from "./Components/Home";
import ImageSlider from "./Components/ImageSider";
import InfoBox from "./Components/InfoBox";
import Navbar from "./Components/Navbar";
import OurProducts from "./Components/OurProduct";
import UpperFooter from "./Components/UpperFooter";
import UpperHeader from "./Components/UpperHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="overflow-hidden">
      <UpperHeader />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
