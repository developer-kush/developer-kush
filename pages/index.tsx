import Navbar from '../components/Utils/Navbar';
import Hero from '../components/Home/hero'
import About from '../components/Home/about'
import Skills from '../components/Home/skills'
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {

  // const pageNavLinks = [
  //   ["home-hero","Page Title"]
  // ]

  // const sections = 4;

  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      const [entry] = entries

      if (entry.isIntersecting){
        document.getElementById('s2_title')?.classList.remove('opacity-0') 
      }
    },{
      threshold: 0.4
    })
    const element:any = document.getElementById('story')
    observer.observe(element)

    return ()=>{
      observer.unobserve(element)
    }
  },[])

  return(
    <div id="HomePage" className={`absolute h-[100vh] overflow-y-scroll overflow-x-hidden select-none w-full`}>
      <Navbar className="bg-transparent"/>
      <div className={`w-[100vw] h-full overflow-x-hidden overflow-y-scroll scroll-smooth bg-navyBlue isolate`}>

        <Hero/>
        <About/>
        <Skills/>
        
        <div id = "endnote" className='h-[100vh] bg-black'>

        </div>
      </div>
    </div>
  )

  // return (
  //   <Layout activePage = "home" pageNavLinks={pageNavLinks}>
  //     <div id="home-hero" className='relative flex w-full h-full overflow-hidden isolate'>
  //       <div className="flex-col m-10 ">
  //         <div className='text-9xl p-3 bg-gradient-to-tr bg-clip-text from-black to-[#0e0e0e] text-transparent font-bold font-mono'>Kushagra<br/>Agarwal</div>
  //         <div className='p-3 text-4xl font-bold text-white uppercase'>Budding Software Developer</div>
  //         <div className='px-5 py-3 text-2xl font-semibold text-white bg-gradient-to-r from-black rounded-l-md'>Check out my Projects</div>
  //       </div>
  //       <Image className='absolute w-full h-full -z-10 opacity-80' src="/img/home-bg.jpg" width={1440} height={800} draggable="false" alt="Bg"/>
  //     </div>
      
  //   </Layout>
  // )

}
