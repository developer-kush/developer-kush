import Navbar from '../components/Utils/Navbar';
import { useEffect } from 'react';

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

  return(
    <div id="HomePage" className={`scroll-smooth absolute h-[100vh] bg-black overflow-y-scroll overflow-x-hidden select-none w-full`}>
      <title>Kushagra Agarwal</title>
      <Navbar title='Theory' className="bg-transparent"/>
      <div id="INTRO" className={`w-[100vw] h-screen overflow-x-hidden overflow-y-scroll scroll-smooth bg-navyBlue bg-[url('/Screens_2.jpeg')] bg-fit isolate`}>
        <div className='flex absolute h-full w-full bg-black bg-opacity-60 items-end justify-end p-5'>
          
        </div>
      </div>

      <div className='w-full bg-gradient-to-b from-[#222] to-black bg-opacit0 h-32 overflow-x-hidden'>
        
      </div>

      <div id="ABOUT" className='min-h-screen bg-black'>
        
      </div>


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

      <div className='h-40 bg-black'>

      </div>

    </div>
  )

}
