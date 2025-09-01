import React from 'react';
import '../../src/index.css';
// import arattLogo from '../../src/assets/arattLogo.png';
import logo1 from '../../src/assets/logo1.svg';
import OverlayMenu from './Overlaymenu';
import { useState } from 'react';
import { useEffect } from 'react';



const Header=()=>{
const[openMenu,setOpenMenu]= useState(false);
const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // change 50 to whatever scroll distance you want
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const onMenuClick=()=>{
  console.log("Menu clicked");
  setOpenMenu(true);
}
const onCloseMenu=()=>{
  console.log("onClose function called");

  setOpenMenu(false);
  // setTimeout(() => {
  //     onCloseMenu();
  //   }, 1); // match duration-500
}

  return (
    <div className={`fixed top-0 left-0 w-[42%] md:w-[84%] lg:w-full z-50 bg-transparent transition-colors duration-300 ease-in-out" ${scrolled ? 'bg-[rgba(32,49,82,0.7)] backdrop-blur-md' : ''}`}>
      <div className="flex flex-row justify-between lg:px-[3rem] px-[1rem] pt-[2rem] pb-[2rem]"> 
        <div className="my-auto">
            {/* <h1 className="text-white text-2xl font-bold">My Website</h1> */}
            <img className="initial-logo" src={logo1} alt="logo" />
        </div>
        <div className="my-auto">
            {/* <h1 className="header-menu">Menu</h1> */}
            <button className="header-menu"
            onClick={onMenuClick}>
            Menu
            </button>
            {openMenu === true?<OverlayMenu
            onClose={onCloseMenu}
            />:null}
        </div>
      </div>
    </div>
  );
}

export default Header