import React, { useRef } from 'react';
import Header from '../Header'
import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.png'
import logo3 from '../../assets/logo3.png'
import Slideshow from '../SlideShow'
import { Slide } from 'react-slideshow-image';
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import resone from '../../assets/resone.png'
import commercial from '../../assets/commercial.png'
import hospitality from '../../assets/hospitality.png'
import TestimonialSlider from '../TestimonialSlider';
import thumb1 from '../../assets/thumb1.png'
import thumb2 from '../../assets/thumb2.png'
import thumb3 from '../../assets/thumb3.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'
import Container from '../../../UI/layout/Container';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CountUp from "react-countup";






const Banner = () => {
  const sliderRef = useRef(null);
  const slides = [
    {
      imageClass: "image-box-one",
      bgImage:'../src/assets/pic1.png',
      location: "Electronic City Phase 1",
      type: "2 & 3 BHK",
      status: "Under Construction",
      total: 349
    },
    {
      imageClass: "image-box-two",
      bgImage:'../src/assets/pic2.png',
      location: "Electronic City Phase 1",
      type: "2 & 3 BHK",
      status: "Under Construction",
      total: 349
    },
     {
      imageClass: "image-box-two",
      bgImage:'../src/assets/pic1.png',
      location: "Electronic City Phase 1",
      type: "2 & 3 BHK",
      status: "Under Construction",
      total: 349
    },
     {
      imageClass: "image-box-two",
      bgImage:'../src/assets/pic2.png',
      location: "Electronic City Phase 1",
      type: "2 & 3 BHK",
      status: "Under Construction",
      total: 349
    }
  ];
//  const stats = [
//     { value: 25, suffix: "+", label: "Years in the Industry" },
//     { value: 20, suffix: "+", label: "Million Sq. Feet" },
//     { value: 37, suffix: "+", label: "Completed Projects" },
//     { value: 26000, suffix: "+", label: "Happy Families" },
//     { value: 3, suffix: "", label: "Resorts Ongoing" },
//     { value: 3, suffix: "", label: "Completed Resorts in Hospitality" },
//   ];
  return (
   <>
      
        {/* Main Banner Content */}
        <main className="flex-grow">
          
          {/* <section> */}
             {/* <Header /> */}
             {/* <Slideshow/> */}
          {/* </section> */}
          <section className='section-two md:p-[2rem] p-[1rem] '>
            <div className='lg:w-[87%] w-full font-montserrat text-white lg:text-[2.2rem] md:text-[2rem] text-[1.71rem] md:pt-[2rem] lg:pl-[3rem] pt-[1rem]' data-aos="fade-in" data-aos-delay="400">
              <h>
              Crafting Lifestyle Narratives, Where Every Space Echoes Individuality and Timeless Sophistication
            </h>
            </div>
            <div>
              <p className='lg:w-[64%] w-full font-montserrat text-white md:text-[1rem] text-[0.7rem] md:pt-[2rem] lg:pl-[3rem] pt-[2rem] md:pb-[0rem] pb-[2rem] text-base' data-aos="fade-down"  data-aos-delay="500">
                Welcome to the House of Aratt, where innovation meets integrity to shape the landscapes of tomorrow. With a legacy spanning 25+ years, we specialize in creating exceptional residential and commercial spaces that seamlessly blend contemporary design with timeless elegance.
              </p>
            </div>
           
             
          </section>
          <section className='section-three md:p-[2rem] p-[1rem]'>
            <Container>
              <div className='pt-[2rem] lg:ml-[3rem] lg:mr-[3rem]'>
                <h className='lg:w-[61%] w-full font-montserrat lg:text-[2.5rem] md:text-[2rem] text-[2rem] text-white md:font-medium font-bold md:pt-[0rem] pt-[2rem] md:pb-[0rem] pb-[2rem]' data-aos="fade-in" data-aos-delay="400">
                  Our Portfolio
                </h>
                <div className='border-b border-b-borderLine lg:pt-[1rem] md:pt-[2rem]'></div>
                {/* <div className='box'></div> */}
              </div>
            </Container>
            
          </section>
          <section className='md:pb-[1rem] md:pr-[3rem] w-full bg-[#203152]'>
            <Container>
              <div className='md:w-[95%] mx-auto md:pl-[3rem] md:pt-[2rem]'>
               <Swiper 
                modules={[Autoplay]}
          //       autoplay={{
          //       delay: 4000, 
          //       disableOnInteraction: false, 
          // }}
          autoplay={false}
          spaceBetween={50}
          slidesPerView={2}
          loop={true} 
          ref={sliderRef}
          autoHeight={true}
               breakpoints={{
                  0: {          // mobile
                    slidesPerView: 1,
                  },
                  768: {        // tablets
                    slidesPerView: 1,
                  },
                  1024: {       // desktops
                    slidesPerView: 2,
                  }
                }}
                  
               >
        {slides.map((slide, index) => (
          console.log("slide",slide),
            <SwiperSlide key={index} className= "md:w-[655px] md:h-[700px] bg-cover bg-center mx-auto overflow-hidden" style={{ backgroundImage: `url(${slide.bgImage})` }}>
              <div className="flex w-full h-[90vh] flex-col justify-end p-[1rem] text-black2 font-montserrat">
                <div className="flex md:w-[90%] w-[95%] md:h-[26%] lg:h-[38%] h-[52%] bg-[#f5f5f580] font-montserrat p-[2rem] rounded">
                  <div className="md:flex flex-row gap-1 bg-[rgb(21, 17, 17)]">
                    <div className="md:flex md:w-36">
                      <img className= "w-[117x] h-[54px]"src={logo3} alt="logo_3" />
                    </div>
                    <div className="flex md:w-[23rem] flex-col gap-6">
                      <p className="text-[0.7rem] font-semibold">
                        Our portfolio is a testament to our unwavering commitment
                        to quality and innovation. Each project is meticulously
                        crafted, reflecting our dedication to excellence and
                        attention to detail. From luxurious residences to dynamic
                        commercial spaces, we create environments that inspire and
                        elevate lifestyles.
                      </p>
                      <div className="grid grid-cols-4 gap-1">
                        <div>
                          <h5 className="text-[0.7rem] font-semibold underline p-0.5">Location</h5>
                          <p className="text-[0.6rem] font-semibold">{slide.location}</p>
                        </div>
                        <div className="border-l border-l-black p-0.5">
                          <h5 className="text-[0.7rem] font-semibold underline">Type</h5>
                          <p className="text-[0.6rem] font-semibold">{slide.type}</p>
                        </div>
                        <div className="border-l border-l-black p-0.5">
                          <h5 className="text-[0.7rem] font-semibold underline">Status</h5>
                          <p className="text-[0.6rem] font-semibold">{slide.status}</p>
                        </div>
                        <div className="border-l border-l-black p-0.5">
                          <h5 className="text-[0.7rem] font-semibold underline">Total Units</h5>
                          <p className="text-[0.6rem] font-semibold">{slide.total}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </SwiperSlide>
          
        ))}
      </Swiper>
      </div>
          <div className='border-b border-b-borderLine lg:w-[92%] md:w-[88%] mt-[2.3rem] mb-[8rem] md:ml-[4.1rem] lg:ml-[5.1rem] ml-[1.1.rem]'>
            <div className="custom-arrows">
            <button onClick={() => sliderRef.current.swiper.slidePrev()}>
              {/* <FaArrowLeft /> */}
              <FiArrowLeft />

            </button>
            <button onClick={() => sliderRef.current.swiper.slideNext()}>
              {/* <FaArrowRight /> */}
                <FiArrowRight />

            </button>
          </div>
          </div>
            </Container>
            
          
    </section>
          <Container>
            <section className=' bg-[rgb(245, 245, 245)] height:auto p-[1rem] md:p-[2rem] lg:p-[1rem]'>
            <div className='flex lg:w-[93%] mx-auto font-montserrat font-medium md:text-[2.2rem] text-[1.55rem] py-12 lg:pr-[3.5rem]'data-aos="fade-in" data-aos-delay="400">
              <p>Experience more than just a residences-embrace a lifestyle filled with enriching experiences and boundless opportunities</p>
            </div>
            <div className='lg:w-[93%] mx-auto font-montserrat font-medium md:text-[2.2rem] text-[1.55rem] py-12 lg:pr-[3.5rem]'>
              <div className='grid grid-cols-3'>
              <div className='flex flex-row py-10 border-b border-b-lightGray border-r border-r-lightGray'data-aos="fade-in">
                
                <div className='w-1/2 px-4 py-4 items-center justify-center'>
                <img src={icon1} alt="icon-one"/>
                </div>
                <div className='flex flex-col px-2'>
                  <h2 className='font-bold text-[4rem] text-brandBlue leading-tight'>
                     <div>
                    {/* <span>25+</span> */}
                    <CountUp end={25} duration={2} />+

                  </div>
                  </h2>
                 
                  <div className='font-montserrat text-[1.4rem] font-light mx-auto'>
                    Years in the Industry
                  </div>
                </div>
              </div>
              <div className='flex flex-row py-10 border-b border-b-lightGray border-r border-r-lightGray'data-aos="fade-in">
                <div className='w-1/2 px-4 py-4 items-center justify-center'>
                <img src={icon2} alt="icon-two"/>
                </div>
                <div className='flex flex-col px-2'>
                  <h2 className='font-bold text-[4rem] text-brandBlue leading-tight'>
                     <div>
                    {/* <span>20+</span> */}
                    <CountUp end={20} duration={2} />+
                  </div>
                  </h2>
                 
                  <div className='w-[70%] font-montserrat text-[1.4rem] font-light'>
                  Million Sq. Feet
                  </div>
                </div>
              </div>
              <div className='flex flex-row py-10 border-b border-b-lightGray'data-aos="fade-in">
                <div className='w-1/2 px-4 py-4 items-center justify-center'>
                <img src={icon3} alt="icon-three"/>
                </div>
                <div className='flex flex-col px-2'>
                  <h2 className='font-bold text-[4rem] text-brandBlue leading-tight'>
                    <div>
                    {/* <span>37+</span> */}
                    <CountUp end={37} duration={2} />+
                    </div>
                  </h2>
                 
                  <div className='font-montserrat text-[1.4rem] font-light mx-auto'>
                   Completed Projects
                  </div>
                </div>
              </div>
              <div className='flex flex-row py-10 border-r border-r-lightGray'data-aos="fade-in">
                <div className='w-1/2 px-4 py-4 items-center justify-center'>
                <img src={icon4} alt="icon-four"/>
                </div>
                <div className='flex flex-col px-2'>
                  <h2 className='font-bold text-[4rem] text-brandBlue leading-tight'>
                     <div>
                    {/* <span>26k+</span> */}
                      <CountUp end={26} duration={2} />k+
                  </div>
                  </h2>
                 
                  <div className='w-[50%] font-montserrat text-[1.4rem] font-light'>
                   Happy Families
                  </div>
                </div>
              </div>
              <div className='flex flex-row py-10 border-r border-r-lightGray'data-aos="fade-in">
                <div className='w-1/2 px-4 py-4 items-center justify-center'>
                <img src={icon5} alt="icon-five"/>
                </div>
                <div className='flex flex-col px-2'>
                  <h2 className='font-bold text-[4rem] text-brandBlue leading-tight'>
                     <div>
                    {/* <span>3</span> */}
                      <CountUp end={3} duration={2} />
                  </div>
                  </h2>
                 
                  <div className='w-[50%] font-montserrat text-[1.4rem] font-light'>
                   Resorts Ongoing
                  </div>
                </div>
              </div>
              <div className='flex flex-row py-10'data-aos="fade-in">
                <div className='px-4 py-4 items-center justify-center'>
                <img src={icon6} alt="icon-six"/>
                </div>
                <div className='flex flex-col px-2'>
                  <h2 className='font-bold text-[4rem] text-brandBlue leading-tight'>
                    <div>
                      {/* <span>3</span> */}
                        <CountUp end={3} duration={2} />
                    </div>
                  </h2>
                 
                  <div className='font-montserrat text-[1.4rem] font-light'>
                   Completed Resorts in Hospitality
                  </div>
                </div>
              </div>
            </div>
            </div>
           
          </section>
          </Container>
          <section className='section-six md:p-[2rem] p-[1rem]'>
            <div className='flex lg:w-[94%] w-full mx-auto font-montserrat font-normal lg:text-[2.2rem] md:text-[1.7rem] text-[1.4rem] lg:pb-[3rem] md:pb-[2rem] pb-[2rem] text-white lg:pr-[3.5rem] md:pt-[3rem] pt-[2rem]'data-aos="fade-in" data-aos-delay="400">
              <p>Iconic living, meticulous design, and architectural excellence. Elevate your lifestyle with unmatched luxury,where every detail defines the distinction.</p>
            </div>  
             <div className='flex md:w-[60%] w-full lg:pl-[3rem] pl-[0.2rem] md:pb-[4rem] font-montserrat font-small md:text-[1rem] text-[0.7rem] text-dimWhite'data-aos="slide-down" data-aos-delay="500">
              <p>Our diverse portfolio encompasses residential, commercial, and hospitality projects, embodying excellence, innovation and distinctive living experiences.</p>
            </div>
            <div className='flex flex-col-reverse lg:w-[92%] md:flex-row mx-auto border-b border-b-borderLine md:h-[62%] pt-[4rem] pb-[2rem]'>
              <div className='hidden md:flex md:flex-col md:w-[30%] font-montserrat md:font-semibold font-base lg:text-[2.2rem] md:text-[1.8rem] text-[1.8rem] text-white lg:pr-[3rem] md:pr-[1rem]' > 
                <h4>Residential</h4>
              </div>
              <div className='md:flex md:flex-col lg:w-[45%] md:w-[45%] lg:pr-[5rem] md:pr-[2rem] font-montserrat font-small lg:text-[0.9rem] md:text-[0.9rem] text-[0.71rem] text-white md:pt-[0rem] pt-[1rem]'data-aos="fade-right"> 
                <h4>
                Discover vibrant living at Aratt, where each residence is tailored to diverse lifestyles. Our three distinct portfolios cater to every budget and preference, ensuring there’s a perfect home for everyone. Whether you seek luxury, affordability, or a balanced blend of both, Aratt has the ideal option. With a focus on sustainability and innovation, our projects go beyond mere living spaces, fostering thriving communities where residents can forge lasting connections and truly thrive.
                </h4>
              </div>
               <div className='md:flex md:flex-col md:w-[30%] font-montserrat md:font-semibold font-base lg:text-[2.2rem] md:text-[1.8rem] text-[1.8rem] text-white lg:pr-[3rem] md:pr-[1rem] lg:hidden md:hidden' > 
                <h4>Residential</h4>
              </div>
              <div className='md:flex md:flex-col lg:w-[70%] md:w-[40%] md:pt-[0rem] pt-[2rem] pb-[2rem] md:pb-[0rem]'> 
                <img src={resone} alt="logo_3" data-aos="fade-down"/>

              </div>
            </div>
            <div className='flex flex-col-reverse lg:w-[92%] md:flex-row mx-auto border-b border-b-borderLine md:h-[62%] pt-[4rem] pb-[2rem]'>
              <div className='hidden md:flex md:flex-col md:w-[30%] font-montserrat md:font-semibold font-base lg:text-[2.2rem] md:text-[1.8rem] text-[1.8rem] text-white lg:pr-[3rem] md:pr-[1rem] lg:block'> 
                <h4>Commercial</h4>
              </div>
               <div className='md:flex md:flex-col lg:w-[45%] md:w-[45%] lg:pr-[5rem] md:pr-[2rem] font-montserrat font-small lg:text-[0.9rem] md:text-[0.9rem] text-[0.71rem] md:pt-[0rem] pt-[1rem] text-white'data-aos="fade-right"> 
                <h4>
                Our journey in commercial real estate began with pioneering tech parks, sparking industry expansion. Experience the essence of Aratt’s meticulously designed commercial spaces, where contemporary aesthetics converge with functional efficiency to inspire innovation and ensure success. From cutting-edge tech parks to vibrant retail hubs, each property is strategically crafted to meet modern enterprises’ diverse needs.
                </h4>
              </div>
              <div className='md:flex md:flex-col md:w-[30%] font-montserrat md:font-semibold font-base lg:text-[2.2rem] md:text-[1.8rem] text-[1.8rem] text-white lg:pr-[3rem] md:pr-[1rem] lg:hidden md:hidden' > 
                <h4>Commercial</h4>
              </div>
              <div className='md:flex md:flex-col lg:w-[70%] md:w-[40%] md:pt-[0rem] pt-[2rem] pb-[2rem] md:pb-[0rem]' > 
                <img src={commercial} alt="logo_3" data-aos="fade-down"/>
              </div>
            </div>
            <div className='flex flex-col-reverse lg:w-[92%] md:flex-row mx-auto border-b border-b-borderLine md:h-[62%] pt-[4rem] pb-[2rem]'>
              <div className='hidden md:flex md:flex-col md:w-[30%] font-montserrat md:font-semibold font-base lg:text-[2.2rem] md:text-[1.8rem] text-[1.8rem] text-white md:pr-[3rem]' > 
                <h4>Hospitality</h4>
              </div>
              <div className='md:flex md:flex-col lg:w-[45%] md:w-[45%] lg:pr-[5rem] md:pr-[2rem] font-montserrat font-small lg:text-[0.9rem] md:text-[0.9rem] text-[0.8rem] md:pt-[0rem] pt-[1rem] text-white' data-aos="fade-right"> 
                <h4>
                Embark on an extraordinary journey with Aratt hospitality, where luxury and distinction converge to redefine your travel experiences. Within our portfolio, discover Ayatana, offering serene landscapes and indulgent amenities for a sanctuary of tranquility, while Azora pulsates with dynamic energy and contemporary allure in bustling urban hubs. Whether seeking nature’s embrace or urban excitement, our hospitality promises unforgettable stays tailored to your preferences , where every moment is infused with luxury and relaxation, ensuring that your journey with us is nothing short of exceptional.
                </h4>
              </div>
              <div className='md:flex md:flex-col md:w-[30%] font-montserrat md:font-semibold font-base lg:text-[2.2rem] md:text-[1.8rem] text-[1.8rem] text-white md:pr-[3rem] lg:hidden md:hidden' > 
                <h4>Hospitality</h4>
              </div>
              <div className='md:flex md:flex-col lg:w-[70%] md:w-[30%] md:pt-[0rem] pt-[2rem] pb-[2rem] md:pb-[0rem]' > 
                <img src={hospitality} alt="logo_3" data-aos="fade-down"/>

              </div>
            </div>
          </section>
            <section className='section-seven md:p-[2.1rem] p-[1rem]'>
              <div className='flex md:w-[93%] w-full mx-auto font-montserrat font-small lg:text-[1rem] md:text-[1.1rem] text-[1.1rem] text-blackLight pr-[3.5rem] pb-[1rem] border-b border-b-borderLine 'data-aos="fade-in" data-aos-delay="400">
                <div className='flex md:w-[35%] lg:w-[32%] w-full'>What some of our clients are saying about Aratt and it’s services -</div>
              </div>
              <div className='flex lg:w-[50%] w-full mx-auto md:py-20 py-10'>
                <TestimonialSlider/>
              </div>
            </section>
            <section className='section-eight md:p-[2.1rem] p-[0.7rem]'>
              <div className='flex lg:w-[93%] w-full md:flex-row flex-col md:justify-between lg:mx-auto pt-[4rem] pb-[1rem] border-b border-b-borderLine gap-4'>
                <div className='flex lg:w-[43%] md:w-[93%] w-full font-montserrat font-normal lg:text-[2rem] md:text-[1.2rem] text-[1.8rem] text-white'>
                  Articles we think you’d find very interesting.
                </div>
                <div className='flex w-[10%] w-full font-montserrat font-normal text-[1rem] text-white md:justify-end md:items-end'>
                  <a href="#" className='underline' data-aos="slide-down" data-aos-delay="1000">View All Stories</a>
                </div>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 lg:w-[93%] md:w-[100%] mx-auto pt-[4rem] pb-[4rem]'>
                <div>
                  <img src={thumb1} alt='thumb1' data-aos='fade-in'/>
                  <div className='w-full font-montserrat font-light text-[1rem] text-dimWhite2 mt-[2rem]' data-aos='fade-in'>
                    Navigating the Home Buying Journey
                    <p className='text-lightGray underline pt-[0.5rem] text-sm'>29th January, 2022</p>
                  </div>
                </div>
                <div>
                  <img src={thumb2} alt='thumb1' data-aos='fade-in'/>
                  <div className='w-full font-montserrat font-light text-[1rem] text-dimWhite2 mt-[2rem]' data-aos='fade-in'>
                    Crafting Your Dream Home-The Aratt Developers Approach
                    <p className='text-lightGray underline pt-[0.5rem] text-sm'>29th January, 2022</p>
                  </div>
                </div>
                <div>
                  <img src={thumb3} alt='thumb1' data-aos='fade-in'/>
                  <div className='w-full font-montserrat font-light text-[1rem] text-dimWhite2 mt-[2rem]' data-aos='fade-in'>
                    Beyond Four Walls
                    <p className='text-lightGray underline pt-[0.5rem] text-sm'>29th January, 2022</p>
                  </div>
                </div>
              </div>
          </section>
   
        </main>

   </>
  )
}

export default Banner
