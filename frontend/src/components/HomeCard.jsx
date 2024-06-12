/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import myimg from "../assets/myimg.jpg"
const HomeCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 justify-between items-center  mt-40 lg:mb-40">
    <div data-aos="fade-up-right" className="flex flex-col gap-2 lg:w-[55%]">
     <h1 className= "text-5xl lg:text-7xl mb-6 gradient-text">Hey!👋, </h1>
     <h1 className= "text-3xl lg:text-5xl  gradient-text"> I'm KOMALKANT DESHMUKH,</h1>
      <p className="text-gray-200  text-xl lg:text-xl ">
        A passinate Web developer and student of Computer Science Engineering from Chhatrapati Shivaji Institute of technology, Durg. Having the experience as a intern REACT DEVELOPER . Having knee interest to learn MERN stack and ML Models
        </p>
     <p className="text-gray-200  text-xl lg:text-xl ">
        A self-motivated learner with positive attitude , collabrative and apdaptive in nature with creative mind. Hobbies to create attractive webpages and learning new technologies.
         </p>
        <div>
        <a href="https://drive.google.com/file/d/1eLtuUx24mWtwke0hB-CNZSlNRjWVDnsc/view">
        <button
        className={`ml-10 px-4 py-2   rounded-md text-white font-medium bg-teal-700` }
         >
        <h4 className='text-white text-xl lg:text-xl'>RESUME</h4>
      </button>
        </a>

        <a href="komalkantdeshmukh112@gmail.com">
        <button
        className={`ml-10 mb-10 px-4 py-2 rounded-md text-white font-medium ` }
         >
       <h4 className='gradient-text  text-xl lg:text-xl'> </h4>
      </button>
        </a>
        </div>
    </div>
    <div>
        <img src={myimg} alt='profile'  className="rounded-full w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] mx-auto"/>
    </div>
    
    </div>
  )
}

export default HomeCard
