import React from "react";
import partner from "./images/partner";
import chola from "./images/chola";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* First Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl mb-2">OUR EXPERTISE</div>
            <ul className="space-y-2 text-[17px]">
              <li>
                <div className="text-[17px] hover:text-gray-300">
                  Payment Gateways
                </div>
              </li>
              <li>
                <div className="text-[17px] hover:text-gray-300">
                  Last Mile Connectivity
                </div>
              </li>
              <li>
                <div className="text-[17px] hover:text-gray-300">IT Park</div>
              </li>
              <li>
                <div className="text-[17px] hover:text-gray-300">
                  E-business
                </div>
              </li>
              <li>
                <div className="text-[17px] hover:text-gray-300">Mobility</div>
              </li>

              <li>
                <div className="text-[17px] hover:text-gray-300">
                  Semiconductor Solutions
                </div>
              </li>
            </ul>
          </div>
          {/* Second Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl mb-2">Get In Touch</div>
            <ul className="space-y-4 space-x-4">
              <li>
                <div className="text-[17px] hover:text-gray-300">
                  {" "}
                  Appavoo Apartments, 1/5, Venus Colony 2nd St, Venus Colony,
                  Alwarpet, Chennai, Tamil Nadu 600018
                </div>
              </li>
              <li>
                <div className="text-[17px] hover:text-gray-300">
                  Ph: +91 9150016223
                </div>
              </li>
              <li>
                <div className="text-sm hover:text-gray-300">
                  Mail: info@vitpark.com
                </div>
              </li>
            </ul>
          </div>
          {/* Third Column */}

          {/* Fourth Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="bg-white p-4 w-[300px] h-[180px] rounded">
              <div className="flex justify-between items-center mb-4">
                {/* Our Partner */}
                <div className="lg:mb-8">
                  <a href="https://biowms.com/">
                    <h4 className="text-[17px] font-bold mb-2 text-gray-900">
                      Our Partner
                    </h4>
                    <img
                      src={partner}
                      alt="Partner Image"
                      className="w-20 h-20 mb-2"
                    />
                    <h1 className="text-gray-900">Chola Chariots</h1>
                  </a>
                </div>
                {/* Our Product */}
                <div className="flex items-center lg:mb-6 flex-col">
                  <h4 className="text-[17px] font-bold mb-2 text-gray-900">
                    Our Product
                  </h4>
                  <img
                    src={chola}
                    alt="Product Image"
                    className="w-30 h-20 mb-2"
                  />
                  <h1 className="text-gray-900">Chola Chariotsf</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* All rights reserved */}
      <div
        className="max-w-8xl
      lg:mr-[840px]
      mx-auto px-4 sm:px-6 lg:px-10 text-center mt-4"
      >
        <p className="text-[17px]">
          &copy; 2024 VIT Park. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
