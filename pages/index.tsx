import Navbar from '../components/Utils/Navbar';
import Hero from '../components/Home/hero'
import About from '../components/Home/about'
import Skills from '../components/Home/skills'
import { useEffect } from 'react';

export default function Home() {

  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      const [entry] = entries

      if (entry.isIntersecting){
        document.getElementById('s2_title')?.classList.remove('opacity-0') 
      }
      if (entry.isIntersecting){
        document.getElementById('s2_info')?.classList.remove('opacity-0')
      }
    },{
      threshold: 0.6
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

}
