import React, { useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageUrls] = useState([
    './images/jo1.jpeg',
    './images/jo2.jpeg',
    './images/joo3.jpeg',
    './images/joo4.webp',
    './images/im5.jpg'
  ]);
  const [titles] = useState([
    "Payment Gateways",
    "Last Mile Connectivity",
    "IT Park",
    "Mobility",
    "E-business"
  ]);
  const [descriptions] = useState([
    "Our advanced payment gateway solutions ensure seamless and secure online transactions for businesses of all sizes. With cutting-edge encryption technologies and robust fraud prevention measures, we empower merchants to accept payments with confidence while providing customers with a smooth and secure checkout experience.",
    "VITPARK understands the critical importance of last mile connectivity in delivering digital services to end-users. Through strategic partnerships and innovative infrastructure solutions, we bridge the gap between networks and end-users, ensuring reliable and high-speed connectivity to homes, businesses, and communities.",
    "VITPARK's IT Park provides state-of-the-art infrastructure and facilities for businesses to thrive in the digital age. With high-speed internet connectivity, modern office spaces, conference rooms, and collaborative work environments, our IT Park fosters innovation, creativity, and growth. Join us at VITPARK and experience the ultimate workspace for your digital journey.",
    "In an increasingly mobile-centric world, VITPARK enables businesses to embrace mobility with tailored solutions that cater to the needs of today's on-the-go consumers. Whether it's developing mobile applications, optimizing websites for mobile devices, or leveraging location-based services, we empower businesses to engage with their audiences anytime, anywhere.",
    "Empower your business to thrive in the digital landscape with VITPARK's comprehensive e-business solutions. From setting up online storefronts and implementing digital payment systems to streamlining supply chain management and enhancing customer engagement, we provide end-to-end support to drive your e-business initiatives forward."
  ]);

  const icons = [
    './images/paymenticon.png',
    './images/connectivityicon.png',
    './images/builingIcon1.png',
    './images/webisteiCONS.png',
    './images/bussinessicon.png'
  ];

  const handleIconClick = (imageNumber) => {
    setCurrentImage(imageNumber - 1);
  };

  const nextImage = () => {
    setCurrentImage(prevImage => prevImage === imageUrls.length - 1 ? prevImage : prevImage + 1);
  };

  const prevImage = () => {
    setCurrentImage(prevImage => prevImage === 0 ? prevImage : prevImage - 1);
  };

  return (
    <div className="relative mb-20 mt-20">
      <div className="w-full h-96 relative bg-gray-800">
        <div className="absolute inset-0 flex justify-between items-center z-10">
          <button onClick={prevImage} className='text-white bg-black p-3 rounded-lg px-5 ml-2 focus:outline-none'>
            <LeftOutlined style={{ fontSize: '24px' }} />
          </button>
          <button onClick={nextImage} className='text-white bg-black p-3 rounded-lg px-5 mr-2 focus:outline-none'>
            <RightOutlined style={{ fontSize: '24px' }} />
          </button>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-4 py-2">
          <h2 className="text-4xl mb-4 font-bold">{titles[currentImage]}</h2>
          <p className="text-lg">{descriptions[currentImage]}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
