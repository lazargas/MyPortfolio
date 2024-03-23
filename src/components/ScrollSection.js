import react from "react";
import HomeHero from "./HomeHero";
import ExperienceHero from "./ExperienceHero";
import ProjectHero from "./ProjectHero";
import "../styles/home.css";

const ScrollSection = ({ children }) => {
    return (
        <div className="scroll-section" >
            {children}
        </div>
    );
}

export default ScrollSection;