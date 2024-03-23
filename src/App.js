import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider';
import Home from './components/Home';
import ExperienceHero from './components/ExperienceHero';
import ProjectHero from './components/ProjectHero';
import HomeHero from './components/HomeHero';

function App() {
  return (
    <div className='relative' >
      <Home>
        <HomeHero className="box-1" id="section" />
        <HomeHero className="box-1" id="section" />
        <HomeHero className="box-1" id="section" />
      </Home>
      <Home>
        <ExperienceHero />
        <ExperienceHero />
        <ExperienceHero />
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
