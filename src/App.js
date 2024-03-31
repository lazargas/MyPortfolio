import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider';
import Home from './components/Home';
import ExperienceHero from './components/ExperienceHero';
import ProjectHero from './components/ProjectHero';
import HomeHero from './components/HomeHero';
import ExperienceHero2 from './components/ExperienceHero2';
import ExperienceHero3 from './components/ExperiemceHero3';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = 'hidden';

    // Enable scroll after 5 seconds (adjust the time as needed)
    const enableScroll = setTimeout(() => {
      document.body.style.overflow = '';
    }, 3000);

    // Cleanup function to enable scroll in case component unmounts before timeout
    return () => {
      clearTimeout(enableScroll);
      document.body.style.overflow = '';
    };
  }, []);
  return (
    <div className='relative' >
      <Home>
        <HomeHero />
        <HomeHero />
        <HomeHero />
      </Home>
      <Home>
        <ExperienceHero />
        <ExperienceHero2 />
        <ExperienceHero3 />
      </Home>
      <Home>
        <ProjectHero />
        <ProjectHero />
        <ProjectHero />
      </Home>
      <Slider />
    </div>


  );
}

export default App;

