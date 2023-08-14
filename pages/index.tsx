import Image from 'next/image';
import Navbar from '../components/Utils/Navbar';
import { useEffect } from 'react';
import { nextjslogo, tailwindcsslogo } from "../components/base64images"

const Field = ( title:string, type:string , elementRef:any)=>{

  if (type!=='string'){
    return null
  }

  return <div>
    <input onChange={e=>elementRef.current=e.target.value} className='outline-none bg-transparent bg-[#272 border-2 border-[#e3e3e3] p-4 w-[80%] h-fit font-DM text-md rounded-lg' placeholder={title}/>
  </div>
}

import React from 'react';

const FuturisticDisplay = () => {
  return (
    <div className="relative w-96 h-60 bg-blue-500 rounded-lg overflow-hidden">
      <div className="absolute w-full h-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 top-1/2 transform -translate-y-1/2"></div>
      <div className="absolute w-2 h-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 left-1/2 transform -translate-x-1/2"></div>
      <div className="absolute w-full h-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bottom-1/2 transform -translate-y-1/2"></div>
      <div className="absolute w-2 h-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 right-1/2 transform -translate-x-1/2"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-bl from-blue-500 via-blue-600 to-blue-700 opacity-50"></div>
      <div className="absolute w-96 h-60 border-2 border-blue-600 border-solid rounded-lg"></div>
      <div className="absolute w-1 h-1 bg-blue-600 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute w-2 h-2 bg-blue-600 rounded-full top-1/4 left-1/4"></div>
      <div className="absolute w-2 h-2 bg-blue-600 rounded-full top-1/4 right-1/4"></div>
      <div className="absolute w-2 h-2 bg-blue-600 rounded-full bottom-1/4 left-1/4"></div>
      <div className="absolute w-2 h-2 bg-blue-600 rounded-full bottom-1/4 right-1/4"></div>
      <div className="absolute w-1 h-1 bg-blue-600 rounded-full bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute w-1 h-1 bg-blue-600 rounded-full top-1/2 left-1/4"></div>
      <div className="absolute w-1 h-1 bg-blue-600 rounded-full top-1/2 right-1/4"></div>
      <div className="absolute w-1 h-1 bg-blue-600 rounded-full bottom-1/2 left-1/4"></div>
      <div className="absolute w-1 h-1 bg-blue-600 rounded-full bottom-1/2 right-1/4"></div>
      <div className="absolute w-1 h-1 bg-blue-600 rounded-full top-1/4 left-1/2 transform -translate-x-1/2"></div>
      <div className="absolute w-1 h-1 bg-blue-600 rounded-full top-1/4 right-1/2 transform -translate-x-1/2"></div>
      <div className="absolute w-1 h-1 bg-blue-600 rounded-full bottom-1/4 left-1/2 transform -translate-x-1/2"></div>
      <div className="absolute w-1 h-1 bg-blue-600 rounded-full bottom-1/4 right-1/2 transform -translate-x-1/2"></div>
    </div>
  );
};

export default function Home() {

  useEffect(()=>{
    const entries = ['ABOUT'].map(ele=>document.getElementById(ele))

    const scrollObserver = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if (entry.isIntersecting){
          console.log("ENTRY :",entry.target.id)
        }
      })
    })

    // scrollObserver.observe(document.getElementById('ABOUT'))
  },[])

  return(
    <div id="HomePage" className={`isolate scroll-smooth absolute h-[100vh] bg-black overflow-y-scroll overflow-x-hidden select-none w-full`}>
      <title>Kushagra Agarwal</title>
      <Navbar title='Theory' className="bg-transparent invert"/>
      <div className='fixed h-32 bg-gradient-to-b from-black via-black '></div>
      {/* <div className='absolute left-0 h-full w-40 bg-gradient-to-r pointer-events-none from-black z-50'></div> */}

      {/* <div className='fixed h-full w-full bg-gradient-flow'> */}
      <div id="INTRO" className={`flex w-full h-screen bg-black p-52 bg-fit isolate`}>
        {/* <div className='flex -z-10 absolute h-full w-full bg-black bg-opacity-70 items-end justify-end p-5'></div> */}
       

        <div className='text-white h-full w-fit mx-auto font-DM font-semibold  text-4xl'>
          <div>Hi 🙃, I am Kushagra,</div>
          <div className='text-8xl my-5'>Problem Solver 🛠</div>
          <div className='mb-4 '>& a Versatile Software Craftsman ,</div> 
          <div>Empowering Solutions</div>
        </div>
      </div>

      {/* <div className='flex flex-col absolute bottom-0 left-0 bg-black isolate h-fit w-20 opacity-90'>
        <div className='absolute pointer-events-none h-screen z-50 bg-gradient-to-r from-black w-20 bottom-0'></div>
        <div className='flex cursor-pointer justify-end items-center h-16 w-32 bg-gradient-to-br from-cyan-500 to-cyan-500 rounded-r-lg -translate-x-10 hover:translate-x-0 transition-all ease-in-out duration-100'><div className="cursor-pointer flex items-center justify-end m-5 font-DM">Home</div></div>
        <div className='flex cursor-pointer justify-end items-center h-16 w-32 bg-gradient-to-br from-red-500 to-red-500 rounded-r-lg -translate-x-10 hover:translate-x-0 transition-all ease-in-out duration-100'><div className="cursor-pointer flex items-center justify-end m-5 font-DM">Work</div></div>
        <div className='flex cursor-pointer justify-end items-center h-16 w-32 bg-gradient-to-br from-blue-500 to-blue-500 rounded-r-lg -translate-x-10 hover:translate-x-0 transition-all ease-in-out duration-100'><div className="cursor-pointer flex items-center justify-end m-5 font-DM">Skills</div></div>
        <div className='flex cursor-pointer justify-end items-center h-16 w-32 bg-gradient-to-br from-yellow-500 to-yellow-500 rounded-r-lg -translate-x-10 hover:translate-x-0 transition-all ease-in-out duration-100'><div className="cursor-pointer flex items-center justify-end m-5 font-DM">Contact</div></div>
      </div> */}

      {/* <div id="ABOUT" className='min-h-screen bg-gradient-to-br from-cyan-500 via-violet-500 to-violet-500'>
        
      </div> */}


      <div id="SKLLS" className='min-h-screen bg-black'>
        
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
            <span className='absolute'><FuturisticDisplay/></span>
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
          className='invert mx-2'
          width={70} height={60} alt="NEXT.js" draggable={false}/>
        </span> & <span>
          <Image src={tailwindcsslogo}
          className="mx-2" width={30} height={10} alt="Tailwind CSS" draggable={false}/>
        </span>
      </div>

    </div>
  )

}
