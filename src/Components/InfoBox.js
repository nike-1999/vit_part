import React from 'react';
import im from './images/download1.jpeg';

const InfoBox = () => {
  return (
    <div className="info-box-container mt-[200px] bg-gray-700 w-full md:h-[380px] 
    gap-40 flex flex-col md:flex-row items-center justify-center">
      <div className=" w-full md:w-[90%]
      flex flex-col  
      md:flex-row items-center lg:mr-9 md:items-start justify-center md:justify-start">
     
        <div className="text-container
          text-center
         mb-4 md:mb-0 order-1 md:order-2 ">
          <h2 className=" lg:text-3xl  w-full  text-white font-bold mt-4 md:mt-0">Discover VITPARK: Innovators in Digital Transformation</h2>
          <p className="text-white
           md:w-[500px] lg:w-[1400px] mt-2 text-1xl mr-2 ml-2  md:mt-4 lg:text-[25px] "> VITPARK, your premier partner in digital transformation. We specialize in advanced payment gateways, last-mile connectivity solutions, mobility services, and expert digital marketing strategies. At our state-of-the-art IT park, innovation and collaboration thrive, fostering a community of forward-thinking pioneers. Join us to explore limitless possibilities and unlock unparalleled expertise. Experience the future with VITPARK..</p>
        
        
        </div>
       
      </div>
   
    </div>
  );
};

export default InfoBox;