import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import {gsap} from "gsap-trial";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import HomeHero from "./HomeHero";
import ExperienceHero from "./ExperienceHero";
import ProjectHero from "./ProjectHero";


gsap.registerPlugin(useGSAP,ScrollSmoother,ScrollTrigger);

const Home = () => {
     const main = useRef(null);
     const smoother = useRef(null);
    // const svgRef = useRef(null);

    useGSAP(()=>{
        smoother.current = ScrollSmoother.create({
            smooth: 2, // seconds it takes to "catch up" to native scroll position
            effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
          });    
          const tl = gsap.timeline();
          tl.from(".home",{
            scale:0,
            opacity:0,
            duration:2,
            ease:"back.out",
            delay:3.5,
          })
          tl.play();
    },{scope:main})

  return (
    <div id="smooth-wrapper" ref={main} >
      <div id="smooth-content" > 
      <HomeHero/>
      <ExperienceHero/>
      <ProjectHero/>
    </div>
      
    </div>
  );
};

export default Home;
