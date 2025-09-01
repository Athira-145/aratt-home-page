import React from "react";
import "../../src/index.css";
import logo1 from '../../src/assets/logo1.svg';
import { useState,useEffect } from "react";
import menuimg from '../../src/assets/menuimg.png';
import rightarrow from '../../src/assets/rightarrow.png';
import linkedinicon from '../../src/assets/linkedinicon.png';
import facebookicon from '../../src/assets/facebookicon.png';
import instagramicon from '../../src/assets/instagramicon.png';

const OverlayMenu=({ onClose })=> {
    console.log("onClose function called",onClose);
    const [isOpen, setIsOpen] = useState(false);
      useEffect(() => {
    setIsOpen(true);
  }, []);
  return (
    <>  
     <div
      className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
         <div className="overlay open">
          <div className="flex flex-row justify-between p-[1rem] lg:p-[2rem] md:p-[2rem] w-[42%] md:w-[82%] lg:w-full">
              <div className="my-auto">
                  <img className="initial-logo" src={logo1} alt="logo" />
              </div>
              <div className="my-auto">
                  <button className="overlay-close" onClick={onClose}>
                      Close
                  </button>
              </div>
          </div>
          <div className="flex flex-col lg:flex-row md:flex-col w-[90%] ml-[1rem] lg:mx-auto md:mx-auto lg:mt-12  md:mt-12 h-auto font-montserrat">
            {/* <div className="border-l border-l-borderLine px-6"> */}
          <div className='md:w-[40%] lg:[64%] xl:pr-14 lg:pr-12 md:pr-8 sm:pr-6 pr-4'>
            <ul className="space-y-1 text-[2rem] lg:text-4xl text-white lg:pl-4 md:pl-0">
                <li className='xl:border-b border-b-borderLine'>Home</li>
                <li className='xl:border-b border-b-borderLine'>About</li>
                <li className='xl:border-b border-b-borderLine'>Residential</li>
                <li className='xl:border-b border-b-borderLine'>Commercial</li>
                <li className='xl:border-b border-b-borderLine'>Hospitality</li>
                <li className='xl:border-b border-b-borderLine'>Contact Us</li>
                <li className='xl:border-b border-b-borderLine'>Blogs</li>
                <li className='xl:border-b border-b-borderLine'>Aratt Consortium</li>
              </ul>
          </div>
            <div className="w-[35%] mx-12 md:mx-[6rem] mt-[6rem] hidden md:hidden lg:block">
              <img src={menuimg} alt="menu" />
              <div className="border-b border-b-borderLine mt-12 flex">
                <a href="#" className="text-[1rem] text-white font-bold underline my-auto">Work With Us</a>
                <img src={rightarrow} alt="arrow" className="p-4" />
              </div>
            </div>
            <div className="w-[40%] lg:w-[30%] mb-6 md:mb-0 lg:mt-28 md:mt-0">
              <h5 className="text-2xxs ss:text-xs md:text-[1rem] text-white font-semibold underline">Head Office:</h5>
              <p className="text-base ss:text-xs md:text-[.9rem] text-dimWhite font-thin pt-6 pb-12">
                House of Aratt, No. 45/1, SN Square, 3rd Cross Rd, Yellappa Chetty Layout,Halasuru, Karnataka 560042
              </p>
              <a href="#">
                <p className="text-xs ss:text-base md:text-[0.9rem] text-dimWhite font-thin">
                  <span className="font-bold underline">Call</span>
                   +91 8150 990 000 
                </p>
              </a>
              <a href="#">
                <p class="text-xs ss:text-base md:text-[0.9rem] text-dimWhite font-thin">
                  <span class="font-bold underline white">Mail:</span> 
                  enquiry@aratt.in
                </p>
              </a>
              <div className="flex mt-20">
                <div className="pr-8 md:pr-12">
                  <a href="#">
                    <img src={facebookicon} alt="" className="h-8 md:h-9"/>
                  </a>
                </div>
                <div className="pr-8 md:pr-12">
                  <a href="#">
                    <img src={instagramicon} alt="" className="h-8 md:h-9"/>
                  </a>
                </div>
                <div className="pr-8 md:pr-12">
                  <a href="#">
                    <img src={linkedinicon} alt="" className="h-8 md:h-9"/>
                  </a>
                </div>
              </div>
            </div>
          
            {/* </div> */}

          </div>
      </div>
      </div>
   </>
  );
}
export default OverlayMenu;