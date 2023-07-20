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

export default function Home() {

  return(
    <div id="HomePage" className={`absolute h-[100vh] bg-black overflow-y-scroll overflow-x-hidden select-none w-full`}>
      <title>Kushagra Agarwal</title>
      <Navbar title='Theory' className="bg-transparent"/>
      <div className={`w-[100vw] h-screen overflow-x-hidden overflow-y-scroll scroll-smooth bg-navyBlue bg-[url('/Screens_2.jpeg')] bg-fit isolate`}>
        <div className='hidden sm:flex absolute h-full w-full bg-black bg-opacity-60 items-end justify-end p-5'>
          
        </div>
      </div>

      <div className='w-full bg-glowBlue h-32'>
        
      </div>

      <div id="ABOUT" className='min-h-screen bg-black'>
        
      </div>

      <div id="CONTACT" className="bg-[#111] h-screen flex text-[#e3e3e3]">
        <div className="w-1/2 font-bebas text-8xl flex items-center justify-center">
          No Signal ... <br/>Mail me
        </div>
        <div className='flex flex-col items-center justify-center w-1/2 h-full'>
          <input className='outline-none bg-transparent bg-[#272 border-2 border-[#e3e3e3] p-4 w-[80%] h-fit font-DM text-md rounded-lg'/>
        </div>

      </div>

      <div className='h-40 bg-black'>

      </div>

    </div>
  )

}
