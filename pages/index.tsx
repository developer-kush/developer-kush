import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Utils/Navbar';
import { useEffect, useRef, useState } from 'react';
import { nextjslogo, tailwindcsslogo } from "../components/base64images"
import { skills } from "../components/Utils/Values"

const randStr = (size : number = 1000) => {
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let ret = ""
  for (let i = 0; i < size; i++) {
    ret += str[Math.floor(Math.random() * str.length)]
  }
  return ret
}

const moveAnims = ()=> {
  const display:any = document.getElementById("HERO-DISPLAY")
  let resstring = ""
  for (let i = 0; i < Math.round(window.innerHeight/26); i++) {
    resstring += randStr(window.innerWidth/9 + 50)+"<br/>"
  }
  display.innerHTML = resstring

}

const useRandom = (values: Array<any>) => {
  const [randomValue, setRandomValue] = useState(null);

  const getRandomValue = () => {
    let randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRandomValue(getRandomValue());
    }
  }, [values]);

  const changeRandomValue = () => {
    setRandomValue(getRandomValue());
  };

  return [randomValue, changeRandomValue];
};

const INTRO = () => {
  const [word, changeWord] : any = useRandom(["Problem Solver", "Software Dev", "Digital Artist", "Software Geek", "Creative Thinker", "Tech Enthusiast"])
  
  useEffect(()=>{
    const wordChangeInterval = setInterval(changeWord, 4000)
    moveAnims()
    const radialMask:any = document.querySelector('.radial-mask');

    const maskedit = (e:any) => {
      // Calculate the cursor position as a percentage of the window's width and height
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      
      // Set the CSS variables with the cursor position
      radialMask.style.setProperty('--x', `${x}%`);
      radialMask.style.setProperty('--y', `${y}%`);
    }
    const masklistener:any = document.addEventListener('mousemove', maskedit);

    return ()=> document.removeEventListener('mousemove', masklistener)
    return ()=>clearInterval(wordChangeInterval)
  },[])

  // const rstring = useRef("Hi")
  // useEffect(()=>{
  //   rstring.current = randStr(5000)

  // })

  

  return <div id="INTRO" onPointerMove={moveAnims} className={`relative items-center justify-center flex w-full h-screen bg-black bg-fit isolate`}>
    
        {/* <Image src="/Screens_2.jpeg" height={720} width={1080} alt="Screens" className='absolute h-screen w-screen' /> */}

        <div id="HERO-SCREEN" className='absolute text-white h-screen w-screen radial-mask'>
          <p id="HERO-DISPLAY" className="h-full bg-black opacity-40 leading-tight hero-display-background w-full overflow-x-clip font-mono pt-20 whitespace-normal">
            
          </p>
        </div>
        
        <div className='text-white w-8/12 z-10 mx-auto font-DM font-semibold  text-5xl'>
          <div>Hi 🙃, I am Kushagra,</div>
          <div className='text-8xl my-5'>{word}</div>
          <div className='mb-4 '>& a Versatile Software Craftsman ,</div> 
          <div>Empowering Solutions</div>
        </div>

      </div>
}

export default function Home() {

  const scrollAnims = () => {
    const scrollPos : number = document.getElementById("HomePage")?.scrollTop || 0
    const PageNo = scrollPos / window.innerHeight
    
    if (PageNo < 1) {
      document.getElementById("INTRO")?.style.setProperty("opacity", `${Math.max(0, 1- 1.5*PageNo)}`)
      moveAnims()
    }
    if (PageNo >= 0.8 && PageNo < 2) document.getElementById("NAVBAR")?.style.setProperty("background-color", `black`)
    else document.getElementById("NAVBAR")?.style.removeProperty("background-color")
  }

  return(
    <div onScroll={scrollAnims} id="HomePage" className={`isolate scroll-smooth absolute h-[100vh] bg-black overflow-y-scroll overflow-x-hidden select-none w-full`}>
      <title>Kushagra Agarwal</title>
      <Navbar title='Theory' className="bg-transparent invert"/>
      <div className='fixed h-32 bg-gradient-to-b from-black via-black '></div>
      {/* <div className='absolute left-0 h-full w-40 bg-gradient-to-r pointer-events-none from-black z-50'></div> */}

      {/* <div className='fixed h-full w-full bg-gradient-flow'> */}
      
      <INTRO />

      {/* <div className='flex flex-col absolute bottom-0 left-0 bg-black isolate h-fit w-20 opacity-90'>
        <div className='absolute pointer-events-none h-screen z-50 bg-gradient-to-r from-black w-20 bottom-0'></div>
        <div className='flex cursor-pointer justify-end items-center h-16 w-32 bg-gradient-to-br from-cyan-500 to-cyan-500 rounded-r-lg -translate-x-10 hover:translate-x-0 transition-all ease-in-out duration-100'><div className="cursor-pointer flex items-center justify-end m-5 font-DM">Home</div></div>
        <div className='flex cursor-pointer justify-end items-center h-16 w-32 bg-gradient-to-br from-red-500 to-red-500 rounded-r-lg -translate-x-10 hover:translate-x-0 transition-all ease-in-out duration-100'><div className="cursor-pointer flex items-center justify-end m-5 font-DM">Work</div></div>
        <div className='flex cursor-pointer justify-end items-center h-16 w-32 bg-gradient-to-br from-blue-500 to-blue-500 rounded-r-lg -translate-x-10 hover:translate-x-0 transition-all ease-in-out duration-100'><div className="cursor-pointer flex items-center justify-end m-5 font-DM">Skills</div></div>
        <div className='flex cursor-pointer justify-end items-center h-16 w-32 bg-gradient-to-br from-yellow-500 to-yellow-500 rounded-r-lg -translate-x-10 hover:translate-x-0 transition-all ease-in-out duration-100'><div className="cursor-pointer flex items-center justify-end m-5 font-DM">Contact</div></div>
      </div> */}

      <div id="ABOUT" className='relative min-h-screen h-full w-full bg-gradient-to-br from-cyan-500 via-violet-500 to-violet-500 flex items-center justify-center'>
        <div className='relative h-4/5 w-4/5 bg-black rounded-md bg-opacity-70 backdrop-blur-sm slide-expand'>
          <div className='font-bebas text-6xl mx-20 my-10 mt-20 text-white'>ABOUT ME</div>
          <div className='text-2xl font-s leading-10 px-32 py-auto font-DM text-white p-10 h-full w-full'>
          As a "Human" Software Developer, I'm not just fluent in code; I'm also fluent in creativity. When software problems throw a curveball, I swing back with innovative solutions that hit it out of the park. My mind is a toolbox of unconventional ideas, and I'm not afraid to use them to untangle the trickiest of code knots. Challenges are like puzzles, and I thrive on solving them with a dash of ingenuity.
          </div>
        </div>
      </div>

      <div id="SKLLS" className='min-h-screen bg-black'>
        <div className='m-20 mb-10 font-bebas text-white text-6xl'>SKILLS & TECHS</div>
        <div className='h-auto mt-10 mx-20 font-DM text-lg font-semibold'>
          {/* {
            Object.keys(skills).map((category:string ,index:any)=>{
              return <div className='flex items-center w-screen -ml-20 px-20'>
              <div className='text-white font-DM text-3xl'> {category}</div>
              <div className="h-fit" key={index}>
                {
                  skills[category].map((skill:string[] , index:number)=>{
                    return <div key={index} className={`${skill[1]} inline-block m-5  py-2 px-3 w-fit rounded-sm`}>
                    {skill[0]}
                  </div>
                  })
                }
              </div></div>
            })
          } */}
          {
            skills.map((skill, index) => {
              return <div key={index} className={`${skill[1]} inline-block m-5  py-2 px-3 w-fit rounded-sm`}>
                {skill[0]}
              </div>
            })
          }
        </div>
      </div>

      <div id="PROJECTS" className='min-h-screen bg-black'>
        
      </div>


      <div id="NONE" className='min-h-screen bg-black'>
        
      </div>

      <div id="CONTACT" className="bg-[#111] hidden sm:flex h-screen text-[#e3e3e3]">
        <div className="w-2/5 font-bebas px-20 text-8xl flex flex-col items-center justify-center">
          <span>Have Projects?</span> <span className='text-6xl m-3'>Let's Talk!</span>
        </div>
        <div className='relative opacity-75 shadow-2xl py-5 pl-5 flex my-10 flex-col bg-gradient-to-r from-black to-[#121212] bg-opacity-80 rounded-l-2xl items-center justify-center w-3/5 h-auto'>
          <div className='h-full shadow-inner rounded-l-2xl  w-full bg-blue-600 bg-opacity-80'>
            <span className='absolute'></span>
            <div></div>
          </div>
        </div>
      </div>
      <div id="CONTACT_SM" className='flex sm:hidden h-screen w-full bg-[#222]'>

      </div>

      <div id="FOOTER" className='h-40 bg-black text-white font-DM items-center justify-center flex'>
        Made with 💓 using 
        <span>
          <Image src={nextjslogo}
          className='invert mx-2 h-5 w-auto'
          width={70} height={60} alt="NEXT.js" draggable={false}/>
        </span> & <span>
          <Image src={tailwindcsslogo}
          className="mx-2 h-5 w-auto" width={20} height={20} alt="Tailwind CSS" draggable={false}/>
        </span>
      </div>

    </div>
  )

}
