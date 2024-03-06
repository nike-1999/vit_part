import React from 'react';
import img1 from './images/aboutus1.jpg';
import img2 from './images/aboutus2.jpg';
import img3 from './images/aboutus3.jpg';
import img5 from './images/aboutus5.jpg';
import img6 from './images/aboutus6.jpg';
import img4 from './images/aboutus4.jpg';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center justify-between my-16">
        {/* First Technology Section */}
        <div className='lg:flex border-[4px] mb-10  lg:border-none'>
        <div className="w-full lg:w-1/2 p-4 md:p-8">
          <h2 className="text-2xl font-bold">Payment Gateway Solutions</h2>
          <p className="mt-4">Our advanced payment gateway solutions ensure seamless and secure online transactions for businesses of all sizes. With cutting-edge encryption technologies and robust fraud prevention measures, we empower merchants to accept payments with confidence while providing customers with a smooth and secure checkout experience.</p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-2 lg:mt-2 md:mb-0">
          <img src={img1} alt="First Technology" className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg" />
        </div>
        </div>
        

        {/* Second Technology Section */}
        <div className='lg:flex  border-[4px]  lg:border-none mb-10'>
        <div className="w-full lg:w-1/2 p-4 flex justify-center order-last lg:order-none">
          <img src={img4} alt="Second Technology" className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg" />
        </div>
        <div className="w-full lg:w-1/2 p-4 md:p-8">
          <h2 className="text-2xl font-bold">Last Mile Connectivity Solutions</h2>
          <p className="mt-4">VITPARK understands the critical importance of last mile connectivity in delivering digital services to end-users. Through strategic partnerships and innovative infrastructure solutions, we bridge the gap between networks and end-users, ensuring reliable and high-speed connectivity to homes, businesses, and communities.</p>
        </div>
        </div>
       
        <div className='lg:flex  border-[4px]  lg:border-none mb-10'>
        <div className="w-full lg:w-1/2 p-4 md:p-8">
          <h2 className="text-2xl font-bold">IT Park</h2>
          <p className="mt-4">ITPARK's IT Park provides state-of-the-art infrastructure and facilities for businesses to thrive in the digital age. With high-speed internet connectivity, modern office spaces, conference rooms, and collaborative work environments, our IT Park fosters innovation, creativity, and growth. Join us at VITPARK and experience the ultimate workspace for your digital journey.</p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mb-4 md:mb-0">
          <img src={img2} alt="First Technology" className="max-w-xs md:max-w-sm lg:max-w-md lg:mb-2 lg:mt-2 xl:max-w-lg" />
        </div>
        </div>
       
        <div className='lg:flex  lg:border-none  border-[4px] mb-10'>
        <div className="w-full lg:w-1/2 p-4 flex justify-center order-last lg:order-none">
          <img src={img3} alt="Second Technology" className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg" />
        </div>
        <div className="w-full lg:w-1/2 p-4 md:p-8">
          <h2 className="text-2xl font-bold">Mobility</h2>
          <p className="mt-4">In an increasingly mobile-centric world, VITPARK enables businesses to embrace mobility with tailored solutions that cater to the needs of today's on-the-go consumers. Whether it's developing mobile applications, optimizing websites for mobile devices, or leveraging location-based services, we empower businesses to engage with their audiences anytime, anywhere.</p>
        </div>
        </div>
        
        <div className='lg:flex  border-[4px]  lg:border-none mb-10'>
        <div className="w-full lg:w-1/2 p-4 md:p-8">
          <h2 className="text-2xl font-bold">E-business</h2>
          <p className="mt-4">Empower your business to thrive in the digital landscape with VITPARK comprehensive e-business solutions. From setting up online storefronts and implementing digital payment systems to streamlining supply chain management and enhancing customer engagement, we provide end-to-end support to drive your e-business initiatives forward.</p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mb-4 md:mb-0">
          <img src={img5} alt="First Technology" className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg lg:mb-2 lg:mt-2" />
        </div>
        </div>
       
        <div className='lg:flex  border-[4px]  lg:border-none
        '> 
        <div className="w-full lg:w-1/2 p-4 flex justify-center order-last lg:order-none">
          <img src={img6} alt="Second Technology" className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg" />
        </div>
        <div className="w-full lg:w-1/2 p-4 md:p-8">
          <h2 className="text-2xl font-bold">Semiconductor Solutions</h2>
          <p className="mt-4">VIT Park, we specialize in providing state-of-the-art semiconductor solutions tailored to meet the evolving needs of industries worldwide. Our advanced semiconductor technologies ensure optimal performance and reliability, catering to businesses of all scales. Leveraging cutting-edge fabrication processes and innovative design methodologies.</p>
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default AboutUs;
