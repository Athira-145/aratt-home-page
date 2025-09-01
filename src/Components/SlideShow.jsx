import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
// import './slideshow.css';
import '../../src/index.css';
import Header from './Header';

const slideImages = [
  {
    Imagepath: '../src/assets/bannerimg-one.jpg',
  },
  {
    Imagepath: '../src/assets/bannerimg-two.jpg',
  },
  {
    Imagepath: '../src/assets/bannerimg-three.jpg',
  },
  {
    Imagepath: '../src/assets/bannerimg-four.jpg',
  },
  {
    Imagepath: '../src/assets/bannerimg-five.jpg',
  },
  {
    Imagepath: '../src/assets/bannerimg-six.jpg',
  },
];


const Slideshow=()=> {
  return (
    
    <div className="slideshow-container">
      {/* <h1 className="text-3xl font-bold text-center mb-6">Image Slideshow</h1> */}
        <Slide
        arrows={false}
        indicators={false}
        duration={2000}           // Time each slide stays (in ms)
        transitionDuration={100}
        
         >
         {slideImages.map((slideImage, index) => {
            console.log("slideImage", slideImage);
            console.log("index",index);
            return (
              <div key={index}>
                <div
                  className="slide-background"
                  style={{ backgroundImage: `url(${slideImage.Imagepath})` }}
                  >
                  {/* <span className="spanStyle">
                    {slideImage.caption}
                  </span> */}
                </div>
              </div>
            );
          })} 
        </Slide>
    </div>
  )
}

export default Slideshow