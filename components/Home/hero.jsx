import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { bebas_neue, be_veitnam_pro, indie_flower } from "../Utils/Fonts"



export default function Hero() {

  const pages = 4

  return (
    <section id="intro" className={`relative overflow-hidden w-full isolate bg-navyBlue`}>


      <div className={'flex items-center sm:mx-4 md:mx-20 justify-center w-full h-screen heroAnim '+indie_flower}>

        <div className="lg:w-2/5 mt-2 flex flex-col text-[#eeeeee]">

          <div className={"text-8xl sm:ml-8 mt-16 my-3 "+bebas_neue}>
            <div>Kushagra</div>
            <div className="ml-12">Agarwal</div>
          </div>
          {/* <div className={"text-xl text-[#aaaaaa] ml-6 "+bebas_neue}>I am</div> */}
          <div className={`text-3xl max-w-xs sm:max-w-full`}>
            <div className="flex text-teal-500 m-3">
              <div className="rounded-full text-black px-3 mr-2 h-fit bg-[#777777] w-fit"> + </div>
              Competitive Programmer
            </div>
            <div className="flex text-red-500 m-3">
              <div className="rounded-full text-black px-3 mr-2 h-fit bg-[#777777] w-fit"> + </div>
              Software Development Enthusiast
            </div>
            <div className="flex text-yellow-500 m-3">
              <div className="rounded-full text-black px-3 mr-2 h-fit bg-[#777777] w-fit"> + </div>
              Python, React Developer
            </div>
            <div className="m-6 bg-[#eeeeee] ml-10 w-fit h-fit text-black text-xl px-4 py-2 rounded-full">
              <Link href='#story'>Explore Story</Link>
            </div>
          </div>

        </div>

        <div className="w-3/5 hidden lg:flex pt-24 mb-5 mr-40 h-full">
          <div className="w-1/3 m-2 rounded-xl mb-20 bg-teal-500"></div>
          <div className="w-1/3 m-2 rounded-xl mt-20 bg-red-500"></div>
          <div className="w-1/3 m-2 rounded-xl mb-20 bg-yellow-500"></div>
        </div>

        {/* <div className={'flex flex-col w-4/5 sm:w-3/5 text-white justify-center '+ be_veitnam_pro}>
            <span className='z-10 p-3 text-lg sm:text-2xl'> 
              Hey, I'm <span className='m-1 font-bold'>Kushagra Agarwal</span>
            </span>
            <div className='z-10 p-3 text-5xl font-bold sm:text-7xl '>
              I love <span className='text-glowBlue'>learning</span> and building <span className='text-glowBlue'>quality</span> products
              <span className="animate-[blink_1s_linear_infinite]">_</span>
            </div>
            <Link href="#section-4" className='z-10 p-3 px-8 m-5 font-sans text-xl font-semibold transition-colors duration-200 ease-in border border-white rounded-full hover:bg-glowBlue hover:text-black hover:bg-none sm:text-2xl w-fit'>Explore me</Link>
        </div> */}

      </div>
        
    </section>
  )
}