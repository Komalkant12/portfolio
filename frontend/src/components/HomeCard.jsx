/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import myimg from "../assets/myimg.jpg"
const HomeCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-2 justify-between items-center  mb-10 lg:mb-10">
    <div data-aos="fade-up-right" className="flex flex-col gap-2 lg:w-[55%]">
     <h1 className= "text-5xl lg:text-7xl mb-6 gradient-text">Hey!👋, </h1>
     <h1 className= "text-3xl lg:text-5xl  gradient-text"> I'm KOMALKANT DESHMUKH,</h1>
      <p className="text-gray-200  text-xl lg:text-xl ">
        A passionate web developer and student of Computer Science Engineering from Chhatrapati Institute of technology, Durg. Having the experience as a intern REACT DEVELOPER & working on four live projects.
        </p>
     <p className="text-gray-200  text-xl lg:text-xl ">
        A self-motivated learner with positive attitude , collaberative and apdaptive in nature with creative mind.
         </p>
     {/* <p className="text-gray-200 text-xl lg:text-xl "> 
        With an insatiable curiosity for learning new technologies, I craft digital experiences that blend simplicity with sophistication. Come journey with me through my portfolio, where innovation meets creativity, and every click tells a story.
        </p> */}
    </div>
    <div>
        <img src={myimg} alt='profile'  className="rounded-full w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] mx-auto"/>
    </div>
    </div>
  )
}

export default HomeCard
