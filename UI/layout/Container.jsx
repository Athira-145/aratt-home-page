import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

const Container = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS (Animate On Scroll) library
  }, [])
  return (
    <div className="xl:max-w-[132rem] lg:max-w-[114rem] md:max-w-[99.2rem] sm:max-w-[100%] ss:max-w-[100%] xs:max-w-[100%] mx-auto sm:px-16 lg:px-4 xs:px-8">
      {props.children}
    </div>
  );
};

export default Container;
