/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import myimg from "../assets/myimg.jpg"
const HomeCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mb-10 lg:mb-36">
    <div data-aos="fade-up-right" className="flex flex-col gap-5 lg:w-[50%]">
     <h1 className= "text-5xl lg:text-7xl mb-10 gradient-text">Hey!👋, </h1>
     <h1 className= "text-3xl lg:text-5xl  gradient-text"> I'm KOMALKANT DESHMUKH,</h1>
      <p className="text-gray-300 text-xl lg:text-2xl ">
        A passionate web developer and student of Computer Science Engineering from Chhatrapati Institute of technology, Durg. Having the experience as a intern REACT DEVELOPER & working on 4 live projects
        </p>
     <p className="text-gray-300 text-xl lg:text-2xl ">
        A self-motivate learner with positive attitude , collaberative and apdaptive in nature with creative mind.
         </p>
     <p className="text-gray-300 text-xl lg:text-2xl "> 
        With an insatiable curiosity for learning new technologies, I craft digital experiences that blend simplicity with sophistication. Come journey with me through my portfolio, where innovation meets creativity, and every click tells a story.
        </p>
    </div>
    <div>
        <img src={myimg} alt='profile'  className="rounded-full w-[200px] h-[200px] lg:w-[450px] lg:h-[450px] mx-auto"/>
    </div>
    </div>
  )
}

export default HomeCard
