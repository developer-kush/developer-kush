import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import Icons from "../../public/icons/icons"
import { bebas_neue, be_veitnam_pro, east_sea_dokdo, indie_flower, oswald } from "../Utils/Fonts"



export default function Hero() {

  const pages = 4

  return (
    <section id="intro" className={`relative overflow-hidden w-full h-auto isolate bg-navyBlue`}>
      <Head><title>Kushagra Agarwal</title></Head>


      <div className={'flex items-center sm:mx-4 md:mx-20 justify-center w-full h-screen heroAnim '+indie_flower}>

        <div className="lg:w-2/5 mt-2 flex flex-col text-[#eeeeee]">

          <div className={"text-8xl sm:ml-8 mt-0 sm:mt-4 my-3 "+ east_sea_dokdo}>
            <div>Kushagra</div>
            <div className="ml-12">Agarwal</div>
          </div>
          {/* <div className={"text-xl text-[#aaaaaa] ml-6 "+bebas_neue}>I am</div> */}
          <div className={`text-3xl max-w-xs sm:max-w-full`}>
            <div className="flex m-3 text-teal-500">
              <div className="rounded-full text-black px-3 mr-2 h-fit bg-[#777777] w-fit"> + </div>
              Competitive Programmer
            </div>
            <div className="flex m-3 text-red-500">
              <div className="rounded-full text-black px-3 mr-2 h-fit bg-[#777777] w-fit"> + </div>
              Software Development Enthusiast
            </div>
            <div className="flex m-3 text-yellow-500">
              <div className="rounded-full text-black px-3 mr-2 h-fit bg-[#777777] w-fit"> + </div>
              All time learner
            </div>
            <Link href='/docs/resume.pdf' target='blank' className="mx-6 group flex sm:my-6 bg-[#eeeeee] hover:bg-transparent hover:text-[#eeeeee] transition-colors duration-200 ease-in ml-10 w-fit h-fit text-black text-xl px-4 py-2 rounded-full" download='/docs/resume.pdf'>
              My Resume <div className="h-6 w-6 ml-3 items-center justify-center group-hover:animate-[blink_1s_linear_infinite] flex">{Icons.download}</div>
            </Link>
          </div>

        </div>

        <div className="hidden w-3/5 h-full pt-24 mb-5 mr-40 lg:flex">
          <div className="relative overflow-hidden flex flex-col w-1/3 m-2 mb-10 bg-teal-500 rounded-2xl">
            <div className="absolute bottom-0 flex justify-center w-full bg-[#080808] h-1/3">
              {/* <Image className="w-3/4 h-fit mt-4 ml-5" src="/img/leetcode_knight.gif" height={300} width={300} alt="Knight_Badge"/> */}
            </div>
          </div>
          <div className="relative overflow-hidden flex flex-col w-1/3 m-2 mt-10 bg-red-500 rounded-xl">
            <div className="absolute top-0 flex justify-center w-full bg-[#080808] h-1/3">
              {/* <Image className="w-3/4 h-fit mt-4 ml-5" src="/img/leetcode_knight.gif" height={300} width={300} alt="Knight_Badge"/> */}
            </div>
          </div>
          <div className="relative overflow-hidden flex flex-col w-1/3 m-2 mb-10 bg-yellow-500 rounded-xl">
            <div className="absolute bottom-0 flex justify-center w-full bg-[#080808] h-1/3">
              {/* <Image className="w-3/4 h-fit mt-4 ml-5" src="/img/leetcode_knight.gif" height={300} width={300} alt="Knight_Badge"/> */}
            </div>
          </div>
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