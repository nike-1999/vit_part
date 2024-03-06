import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#252525] text-white'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-start lg:items-start w-full max-w-screen-xl mx-auto py-8 px-4 lg:px-0'>
        <ul className="flex flex-col md:mr-[550px]  items-center lg:items-start">
          <h1 className='mb-8 mr-7 text-[22px] text-[#ea2691] font-bold'>OUR EXPERTISE</h1>
          {/* ea2691 */}
          <div className='text-[17px]'>
            <li className='mb-1 hover:text-[#ea2691]'>Payment Gateways</li>
            <li className='mb-1 hover:text-[#ea2691]'>Last Mile Connectivity</li>
            <li className='mb-1 hover:text-[#ea2691]'>IT Park</li>
            <li className='mb-1 hover:text-[#ea2691]'>Mobility</li>
            <li className='mb-1 hover:text-[#ea2691]'>E-business</li>
            <li className='mb-1 hover:text-[#ea2691]'>Semiconductor Solutions</li>

        
          </div>
        </ul>
       
        <ul className="flex flex-col items-center lg:items-start">
          <h1 className='mb-8 text-[22px] text-[#ea2691] font-bold'>GET IN TOUCH</h1>
          <div>
            <li className='text-[17px] mb-4'>Appavoo Apartments, 1/5, Venus Colony 2nd St, Venus Colony, Alwarpet, Chennai, Tamil Nadu 600018</li>
            <div className='flex gap-9'>
              <li className='text-[17px]'>Ph: +91 9150016223</li>
              <li className='text-[17px]'>Mail:  info@vitpark.com</li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Footer;