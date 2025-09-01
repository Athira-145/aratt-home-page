import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const testimonials = [
  {
    text: "Our experience with Aratt Developers in purchasing our apartment has been nothing short of excellent.",
    author: "Shabana Praveen",
  },
  {
    text: "We are very happy with the overall service and the quality of the apartment delivered.",
    author: "Rahul Nair",
  },
  {
    text: "The entire team was very supportive and guided us throughout the process.",
    author: "Ananya Menon",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="text-black font-montserrat">
      <div className="lg:max-w-4xl max-w-[30%] md:mx-auto">
        <Swiper
           modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4000, // 4 seconds
            disableOnInteraction: false, // keeps autoplay after user swipes
          }}
        //   pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true} // makes it continuous
          // autoplay={false}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div>
                <p className="md:text-[2rem] text-[1.5rem] font-normal">
                  "{item.text}"
                </p>
                <p className="mt-6 text-lg font-semibold text-secondary underline">
                  {item.author}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;
