// eslint-disable-next-line no-unused-vars
import React from 'react'
import Project7 from "../assets/project7.png"
import { FaGithub } from "react-icons/fa";
import { RiSignalTowerLine } from "react-icons/ri";

const ProjectCard = () => {
  return (
    <div className='p-4 m-4 '>
    <div className='h-90% w-[320px] md:w-[320p] border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-clip lg:overlow-hidden hover:shadow-md lg:hover:scale-105 transition-all backdrop-blur-3xl shadow-xl'>
      <a href="">
        <img src={Project7} alt="QuickMail"   className="lg:h-48 h-[200px] w-full object-cover object-center" />
      </a>
       <div className='p-4 flex flex-col lg:gap-3'>
        <h2 className="tracking-widest text-2xl text-white" >DrumKit</h2>
         <h1 className='text-lg ld:text-xl font-600 text-gray-300'>
         DrumKit webpage lets you play a virtual drum kit using your keyboard! By just pressing keys (like w,a,s,d,j,k,l) to trigger realistic drum sounds. It is a fun way to practice your rhythm or jam out online!
        </h1>
        <div className="flex items-center justify-between" >
          <a href="#">
          < FaGithub className='text-white font-bold inline-flex item-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-gray-600 cursor-pointer' />
          </a>
          <a href="https://5g4j22.csb.app/">
          <RiSignalTowerLine className='text-white font-bold inline-flex item-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-gray-600 cursor-pointer' />
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProjectCard
