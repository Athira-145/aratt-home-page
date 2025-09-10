import React from 'react'
import CountUp from "react-countup";
import icon1Mob from '../assets/icon1Mob.png'
import icon3Mob from '../assets/icon3Mob.png'
import icon4Mob from '../assets/icon4Mob.png'
import icon5Mob from '../assets/icon5Mob.png'
import icon6Mob from '../assets/icon6Mob.png'
import icon7Mob from '../assets/icon7Mob.png'

const MobileView=()=> {
  return (
    <div className='md:hidden lg:hidden w-[93%] mx-auto font-montserrat font-medium md:text-[2.2rem] text-[1.55rem]'>
              <div className='grid grid-cols-2 gap-6'>
  {/* Years in the Industry */}
  <div className='flex flex-col items-center justify-center border-b border-b-lightGray border-r border-r-lightGray' data-aos="fade-in">
    <div className='py-[1rem]'>
      <img src={icon1Mob} alt="icon-one-mob"/>
      <h2 className='font-bold text-[3rem] text-brandBlue leading-tight'>
        <CountUp end={25} duration={2} />+
      </h2>
      <p className='text-center text-[1rem] font-light'>Years in the Industry</p>
    </div>
  </div>

  {/* Million Sq.Ft. */}
  <div className='flex flex-col items-center justify-center py-10 border-b border-b-lightGray' data-aos="fade-in">
    <div className='py-[1rem]'>
      <img src={icon5Mob} alt="icon-three-mob"/>
       <h2 className='font-bold text-[3rem] text-brandBlue leading-tight'>
        <CountUp end={20} duration={2} />+
      </h2>
    </div>
    {/* <div className='px-2 text-center'> */}
     
      <p className='text-center text-[1rem] font-light'>Million Sq.Ft.</p>
    {/* </div> */}
  </div>

  {/* Completed Projects */}
  <div className='flex flex-col items-center justify-center py-10 border-b border-b-lightGray border-r border-r-lightGray ' data-aos="fade-in">
    <div className='py-[1rem]'>
      <img src={icon3Mob} alt="icon-three-mob"/>
      <h2 className='font-bold text-[3rem] text-brandBlue leading-tight'>
        <CountUp end={37} duration={2} />+
      </h2>
      <p className='text-[1rem] font-light'>Completed Projects</p>
    </div>
    {/* <div className='px-2 text-center'>
    </div> */}
  </div>

  {/* Happy Families */}
  <div className='flex flex-col items-center justify-center py-10 border-b border-b-lightGray' data-aos="fade-in">
    <div className='py-[1rem]'>
      <img src={icon4Mob} alt="icon-five-mob"/>
      <h2 className='font-bold text-[3rem] text-brandBlue leading-tight'>
        <CountUp end={26} duration={2} />k+
      </h2>
      <p className='text-[1rem] font-light'>Happy Families</p>
    </div>
    {/* <div className='px-2 text-center'>
      
    </div> */}
  </div>
  <div className='flex flex-col items-center justify-center py-10 border-r border-r-lightGray' data-aos="fade-in">
    <div className='pr-[0.9rem] py-[1rem]'>
      <img src={icon6Mob} alt="icon-six-mob"/>
       <h2 className='font-bold text-[3rem] text-brandBlue leading-tight'>
        <CountUp end={3} duration={2} />
      </h2>
      <p className='text-[0.9rem] font-light'>Resorts Ongoing</p>
    </div>
    {/* <div className='px-2 text-center'>
     zzzz`2
    </div> */}
  </div>
  <div className='flex flex-col items-center justify-center py-10' data-aos="fade-in">
    <div className='px-[1rem] py-[1rem]'>
      <img src={icon7Mob} alt="icon-seven-mob"/>
      <h2 className='font-bold text-[3rem] text-brandBlue leading-tight'>
        <CountUp end={3} duration={2} />
      </h2>
      <p className='text-[1rem] font-light'>Completed Resorts in Hospitality</p>
    </div>
    {/* <div className='px-2 text-center'>
      
    </div> */}
  </div>
</div>

    </div>
  )
}

export default MobileView