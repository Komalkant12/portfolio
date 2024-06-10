
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {  AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const PortfolioCard = () => {
    return (
      <div data-aos="fade-left"
      className='flex flex-col lg:flex-row lg:items-center mb-10 lg:mb-26'>
     <div>
     <div data-aos = 'flip-left'
      
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
        className=" lg:mb-10 m px-3 lg:p-3 text-white  lg:w-[30vw] backdrop-blur-md border border-gray-500 select-none rounded-2xl 
        lg:my-[200px] hover:scale-110 transition-all delay-100 hover:border-white shadow-lg portfolio-card"
      >
        <h3 className="text-4xl lg:text-6xl font-bold py-3 border-2 border-transparent border-b-gray-400 ">
          Portfolio*
        </h3>
        <h3 className="text-xl lg:text-2xl py-3 border-2 border-transparent border-b-gray-400">
          Komalkant Deshmukh
        </h3>
        <h3 className="text-xl lg:text-2xl py-3">MERN Stack Web Developer</h3>
      </div>
        
     </div>
      {/* //profile section */}
      
      <div className=" flex flex-col mt-40 px-3 lg:p-4 justify-end items-center   ms-60 p-3">
      <h1 className="text-5xl lg:text-5xl  gradient-text mb-20">Profiles</h1>

      <a href="https://github.com/komalkant12" target="_blank" rel="noopener noreferrer">
          <AiFillGithub className="text-white   text-6xl hover:text-gray-300 " />
          <span className="ml-2  text-white text-4xl">komalkant12</span>
        </a>

        <a href="https://www.linkedin.com/in/komalkant-deshmukh-80230a225/">
          <AiFillLinkedin className="text-white text-6xl hover:text-gray-300 " />
          <span className="ml-2 text-white text-3xl">Komalkant Deshmukh</span>
        </a>
        
      </div>
      </div>
    );
  };
  
  export default PortfolioCard;