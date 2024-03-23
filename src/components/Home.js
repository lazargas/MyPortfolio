import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap-trial";
import HomeHero from "./HomeHero";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import "../styles/home.css";
import ScrollSection from "./ScrollSection";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = ({ children }) => {
  const main = useRef(null);
  const section = useRef(null);

  useGSAP(() => {

    const tl = gsap.timeline();
    tl.from(".home", {
      scale: 0,
      opacity: 0,
      duration: 2,
      ease: "back.out",
      delay: 3.5,
    })
    tl.play();
    const container = main.current;
    const items = container.querySelectorAll('#section');

    gsap.fromTo(section.current, {
      translateX: 0
    }, {
      translateX: "-200vw", // Move each item to the right by the width of the container
      scrollTrigger: {
        trigger: container,
        end: "bottom top",
        start: "top top",
        end: "300% top", // Set the end to be the total width of all items
        scrub: 0.5, // Adjust the scrubbing speed
        pin: true, // Pin the container while scrolling
        ease: "elastic"
      },
    });
    ScrollTrigger.defaults({ markers: { startColor: "white", endColor: "white" } });

  }, { scope: main })

  return (
    <section className="scrollSectionOuter">
      <div ref={main} >
        <div ref={section} className="" >
          <ScrollSection children={children} />
        </div>
      </div>
    </section>
  );
};

export default Home;
