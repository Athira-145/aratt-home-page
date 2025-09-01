import React from 'react'
import '../../src/index.css';
import linkedinicon from '../../src/assets/linkedinicon.png';
import facebookicon from '../../src/assets/facebookicon.png';
import instagramicon from '../../src/assets/instagramicon.png';

const Footer =()=> {
  return (
  
      <footer className="bg-brandBlue w-full font-montserrat text-white py-12 px-6">
        <div className="md:w-[90%] w-full mx-auto grid md:grid-cols-2 gap-12 pt-8">

        {/* === Left: Contact Form === */}
        <div className='w-full'>
          <div className='md:w-[81%] w-full'>
            <h2 className="text-2xl md:text-3xl font-normal">
            Allow us to get in touch to share project details
          </h2>
          </div>
          <div className='mt-16 text-base'>
            <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-transparent border-b border-bottom focus:outline-none my-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-transparent border-b border-bottom focus:outline-none my-2"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-bottom focus:outline-none my-2"
              />
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full text-sm bg-transparent border-b border-bottom focus:outline-none my-2"
              />
            </div>

            <textarea
              placeholder="Message"
              rows="3"
              className="w-full bg-transparent border-b border-bottom focus:outline-none"
            ></textarea>

            {/* hCaptcha placeholder */}
            {/* <div className="flex mt-4 mb-4 justify-center align-middle w-full bg-white text-black rounded-md">
              Captcha here
            </div>  */}
            <div className='pt-16'>
              <button
              type="submit"
              className="text-white font-semibold border-b-2 border-white hover:opacity-80"
            >
              Submit
            </button>
            </div>
            </form>
          </div>
          
        </div>

        {/* === Right: Info & Links === */}
        <div className="md:border-l border-l-borderLine md:px-[3.5rem]">
          <div className='w-3/5'>
            <ul className="space-y-1 text-lg">
                <li className='border-b border-b-borderLine'>Home</li>
                <li className='border-b border-b-borderLine'>About</li>
                <li className='border-border-b-borderLine'>Residential</li>
                <li className='border-b border-b-borderLine'>Commercial</li>
                <li className='border-b border-b-borderLine'>Hospitality</li>
                <li className='border-b border-b-borderLine'>Contact Us</li>
                <li className='border-b border-b-borderLine'>Blogs</li>
                <li className='border-b border-b-borderLine'>Aratt Consortium</li>
              </ul>
          </div>
          

          {/* <div className="md:w-[40%] mt-12 pl-3 space-y-4 text-sm">
            <p className='flex md:flex-row flex-col md:space-x-8 '>
              <span className="flex md:flex-row flex-col font-bold underline md:space-x-8">Head Office:</span><br />
              House of Aratt, No. 45/1, SN Square,3rd Cross Rd, Yellappa Chetty Layout,Halasuru, 
              <br/>
              Karnataka 560042
            </p>
          </div> */}
          <div class="flex md:flex-row flex-col md:mt-24 mt-16 md:space-x-8">
            <div class="lg:w-[42%] md:w-[100%]">
              <h6 class="py-4 lg:py-0 md:pb-[1rem] font-bold text-white text-base underline">Head Office:</h6>
              <p class="text-white text-[0.9rem] hidden md:block ">
                House of Aratt, No. 45/1, SN Square, 3rd Cross Rd, Yellappa Chetty Layout,Halasuru,  
                <br/>
                Karnataka 560042
              </p>
                <p class="text-white text-xs md:hidden py-4 md:py-0">
                  House of Aratt, No. 45/1, SN Square, 3rd CrossRd, Yellappa Chetty Layout,Halasuru,  Karnataka 560042
                  </p>
            </div>
          </div>
          <div className='flex md:flex-row flex-col my-12 pt-4 md:pt-0 md:w-full md:space-x-8'>
            <div className='flex-1 text-sm'>
             <a href="#"> 
                <p class="text-white text-xs py-2 md:py-0">
                  <span class="font-bold underline">Call:</span>
                  +91 8150 990 000
                </p>
              </a>
              <a href="#">
                <p class="text-white text-xs py-2 md:py-0">
                  <span class="font-bold underline">Mail:</span>
                  enquiry@aratt.in
                </p>
              </a>
              {/* <span className="font-bold underline">Call:</span> +91 8150 990 000 <br />
              <span className="font-bold underline">Mail:</span> enquiry@aratt.in */}
               </div>
               <div className='flex flex-1 py-6 my-8 md:my-0 md:py-0'>
                <div className='pr-4'>
                  <a href="#">
                    <img src={facebookicon} alt="" className="h-[1.5rem] md:h-[1.5rem]"/>
                  </a>
                </div>
                <div className='px-4'>
                  <a href="#">
                    <img src={instagramicon} alt="" className="h-[1.5rem] md:h-[1.5rem]"/>
                  </a>
                </div>
                <div className='px-4'>
                  <a href="#">
                    <img src={linkedinicon} alt="" className="h-[1.5rem] md:h-[1.5rem]"/>
                  </a>
                </div>
               </div>
          </div>

         
          
          <div className="flex flex-1 text-sm lg:w-[50%] md:w-[100%] mt-12 text-center lg:text-[0.7rem] md:text-[0.4rem] text-gray-300">
              copyright © 2023 ARATT. All Rights Reserved.
          </div>

        </div>
      </div>

      
    </footer>
  )
  
      {/* <div className="footer-text">
        © 2025 Your Company. All rights reserved.
      </div> */}
  
}

export default Footer
