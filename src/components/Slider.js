import React,{useRef} from 'react'
import { useGSAP } from '@gsap/react'
import {gsap} from "gsap-trial";

gsap.registerPlugin(useGSAP);

const Slider = () => {
  const container = useRef(null);
  useGSAP(()=>{
      const tl = gsap.timeline();
      tl.from(".text",{
        yPercent:100,
        duration:1.25,
        stagger:0.75,
        ease:"back.out"
      }).to(container.current,{
        xPercent:-100,
        duration:1.25
      })
      tl.play();
  },{scope:container})
  return (
    <div ref={container} className='absolute justify-center  h-screen w-full bg-white overflow-hidden p-[2.5rem] text-[120px] flex flex-col gap-[2.5rem] ' >
        <div className='bg-[#ff0] overflow-hidden font-mori'>
            <p className='text' >Developer</p>
        </div>
        <div className='bg-[#f0fs] overflow-hidden font-mori'>
            <p className='text' >Engineer</p>
        </div>
        <div className='bg-[#ff0] overflow-hidden font-mori'>
            <p className='text' >Freelancer</p>
        </div>
    </div>
  )
}

export default Slider