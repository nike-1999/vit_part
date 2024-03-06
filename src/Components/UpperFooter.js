import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const UpperFooter = () => {
 
  return (
    <div className='w-full bg-[#ea2691] md:h-[140px] h-auto py-5 md:py-0'>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-left">
        <span className='text-[26px]
         
        text-white font-popins font-bold 
        mb-4 md:mt-10 md:ml-5 mr-2  lg:mr-10'>

Uncover groundbreaking semiconductor solutions at VIT Park today and innovate.
        </span>
       
      <button
        
        className='px-10 md:px-10 
        py-3 md:w-60 md:py-3 md:mt-8 md:mr-5
         bg-[#ea2691] text-white 
        
         lg:text-[22px] border-white border-[3px]'>
          About Us
        </button>
       
      </div>
    </div>
  );
}

export default UpperFooter;
