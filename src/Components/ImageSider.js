import React, { useState } from "react";
import im1 from "./images/imm1.jpeg";
import im5 from "./images/im5.jpg";
import im4 from "./images/im4.jpg";
import joo1 from "./images/jo1.jpeg";
import joo2 from "./images/jo2.jpeg";
import joo3 from "./images/joo3.jpeg";
import joo4 from "./images/joo4.webp";
import payment from "./images/paymenticon.png";
import connectivity from "./images/connectivityicon.png";
import building from "./images/builingIcon1.png";
import webisteiCONS from "./images/webisteiCONS.png";
import business from "./images/bussinessicon.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageUrls] = useState([joo1, joo2, joo3, joo4, im5, im5]);
  const [titles] = useState([
    "Payment Gateways",
    "Last Mile Connectivity",
    "IT Park",
    "Mobility",
    "E-business",
    "Semiconductor Solutions",
  ]);
  const [descriptions] = useState([
    "Our advanced payment gateway solutions ensure seamless and secure online transactions for businesses of all sizes. With cutting-edge encryption technologies and robust fraud prevention measures, we empower merchants to accept payments with confidence while providing customers with a smooth and secure checkout experience.",
    "VITPARK understands the critical importance of last mile connectivity in delivering digital services to end-users. Through strategic partnerships and innovative infrastructure solutions, we bridge the gap between networks and end-users, ensuring reliable and high-speed connectivity to homes, businesses, and communities.",
    "VITPARK's IT Park provides state-of-the-art infrastructure and facilities for businesses to thrive in the digital age. With high-speed internet connectivity, modern office spaces, conference rooms, and collaborative work environments, our IT Park fosters innovation, creativity, and growth. Join us at VITPARK and experience the ultimate workspace for your digital journey.",
    "In an increasingly mobile-centric world, VITPARK enables businesses to embrace mobility with tailored solutions that cater to the needs of today's on-the-go consumers. Whether it's developing mobile applications, optimizing websites for mobile devices, or leveraging location-based services, we empower businesses to engage with their audiences anytime, anywhere.",
    "Empower your business to thrive in the digital landscape with VITPARK's comprehensive e-business solutions. From setting up online storefronts and implementing digital payment systems to streamlining supply chain management and enhancing customer engagement, we provide end-to-end support to drive your e-business initiatives forward.",
    "VIT Park, we specialize in providing state-of-the-art semiconductor solutions tailored to meet the evolving needs of industries worldwide. Our advanced semiconductor technologies ensure optimal performance and reliability, catering to businesses of all scales. Leveraging cutting-edge fabrication processes and innovative design methodologies",
  ]);
  const icons = [payment, connectivity, building, webisteiCONS, business, im5];

  const handleIconClick = (imageNumber) => {
    setCurrentImage(imageNumber - 1);
  };

  const nextImage = () => {
    setCurrentImage((prevImage) => {
      if (prevImage === imageUrls.length - 1) {
        return prevImage;
      } else {
        return prevImage + 1;
      }
    });
  };
  const prevImage = () => {
    setCurrentImage((prevImage) => {
      if (prevImage === 0) {
        return prevImage;
      } else {
        return prevImage - 1;
      }
    });
  };
  return (
    <div className="relative">
      <div className="w-full h-[500px] relative">
        <div className="absolute inset-0 flex justify-between items-center z-10">
          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="text-white bg-black p-3 rounded-lg focus:outline-none"
          >
            <LeftOutlined style={{ fontSize: "24px" }} />
          </button>
          <button
            onClick={nextImage}
            className="text-white bg-black p-3 rounded-lg focus:outline-none"
          >
            <RightOutlined style={{ fontSize: "24px" }} />
          </button>
        </div>

        <div className="w-full h-full bg-gray-700 bg-cover bg-center" />

        <div
          className="absolute  
         lg:w-full md:top-40
           lg:ml-[400px] text-white px-4 py-2"
          style={{ bottom: "15%", left: "50%", transform: "translateX(-50%)" }}
        >
          <h2
            className="text-3xl 
          
          ml-10 md:text-4xl lg:text-4xl mb-4 font-bold"
          >
            {titles[currentImage]}
          </h2>
          <p
            className=" 
          w-[285px]   ml-6 text-[18px]
          lg:text-2xl
           lg:w-[1100px] md:text-1xl md:w-[700px]   lg:max-w-2xl"
          >
            {descriptions[currentImage]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
