// eslint-disable-next-line no-unused-vars
import React , {useEffect} from "react";
import { BrowserRouter as Router, Routes} from 'react-router-dom';

 import Navbar from "../components/Navbar";
import PortfolioCard from "../components/PortfolioCard";
import HomeCard from "../components/HomeCard";
import AboutCard from "../components/AboutCard";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
// eslint-disable-next-line no-unused-vars
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(()=>
  {
    AOS.init({
      duration: 1500,

    });
  }, [])
  return (
    <div className="">
     <Router>
        <Navbar/>
      </Router> 
   <Routes>
     <PortfolioCard />
      <HomeCard />
      <AboutCard />
      <SkillSection />
      <ProjectSection />
      <ContactSection/>
   </Routes>
     
    </div>
  );
};

export default Home;
