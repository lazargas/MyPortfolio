import React, { useRef } from 'react'
import "../styles/home.css";
import "../styles/experienceHero2.css";
import { gsap } from "gsap-trial";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const ExperienceHero3 = () => {
    const main = useRef(null);
    useGSAP(() => {
        // var morph = gsap.to("#circle", { duration: 1, morphSVG: "#logo", repeat: 1, yoyo: true, repeatDelay: 0.2 })
        // const handleClick = () => {
        //     morph.restart(true);
        // }
        // document.getElementById("button").addEventListener("click", handleClick);
    }, { scope: main })
    return (
        <>
            <div id="button" ref={main} className="bg-slate-600 font-mori h-screen w-[100vw] flex justify-starts items-center text-white text-[60px] md:text-[120px]">
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 124 65"
                    xmlSpace="preserve"
                >
                    <style
                        type="text/css"
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n                        .st0{fill:#FFF;}\n                        .st1{fill:#FFF;}\n                    "
                        }}
                    />
                    <path
                        className="st0"
                        d="M42.8,2h5.6v14.6h9.8v5.6H42.8V2z M61.3,2h16.2v4.8H66.8v3.1h9.7v4.4h-9.7v3.2h10.8v4.8H61.3V2z M88.2,1.9h5.4  l8.6,20.3h-6l-1.5-3.6h-7.8l-1.4,3.6h-5.9L88.2,1.9z M93.1,14.2l-2.2-5.7l-2.3,5.7H93.1z M104.9,2h7.8c7.2,0,11.4,4.1,11.4,10V12  c0,5.8-4.2,10.1-11.5,10.1h-7.7V2z M112.7,17.2c3.3,0,5.6-1.8,5.6-5.1v-0.1c0-3.2-2.2-5.1-5.6-5.1h-2.3v10.3H112.7z"
                    />
                    <path
                        className="st1"
                        d="M50.3,49.4l5.3-1.7l-4.5-13.8l9.3-3l-1.7-5.3l-14.6,4.7L50.3,49.4z M15.6,14.7l1.7-5.3l13.8,4.5L35.6,0l5.3,1.7  l-6.2,19.2L15.6,14.7z M48.6,50.3l-4.5,3.3l-8.6-11.8L15.1,54.6L0,65l15.4-23.2l7.7-12.4l-11.8-8.6l3.3-4.5L31,28.2L16.4,48.6  L36.8,34L48.6,50.3z"
                    />
                </svg>

            </div>
        </>
    )
}

export default ExperienceHero3



