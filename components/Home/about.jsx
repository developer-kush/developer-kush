import Image from "next/image"
import { indie_flower } from "../Utils/Fonts"

export default function About(){
  return (
    <section id = "story" className='relative flex flex-col w-full h-full bg-navyBlue isolate'>
      
      <div className="absolute w-full h-full pt-20 sm:pb-10 sm:pl-10">
        <div className="w-full h-full flex bottom-0">
          <Image className="rounded-xl bottom-0 w-auto h-full mt-auto" src="/img/story.png" width={1200} height={1200} alt='story' draggable={false}/>
        </div>
      </div>

      <div id="s2_title" className='opacity-0 px-10 transition-opacity z-10 duration-150 ease-in flex  items-center w-full pt-20 pb-3'>
        {/* <div className='flex w-full h-2 text-transparent my-9 bg-glowBlue'>|</div> */}
        <div className={'sm:h-20 m-5 sm:pl-5 sm:pt-5 flex w-full justify-center items-center text-6xl sm:text-8xl text-white font-bold sm:w-max '+indie_flower}>Story</div>
        <div className='hidden sm:flex h-0.5 my-10 w-full mr-12 bg-glowBlue text-transparent'>|</div>
      </div>
      <div id="s2_info" className={`opacity-0 my_story text-white z-10 px-5 sm:px-20 flex `+indie_flower}>
        <div className="lg:w-1/3 w-0 h-full"></div>
        <div className="lg:w-2/3 text-md sm:text-xl bg-black bg-opacity-70 w-fit p-6 sm:p-10 rounded-lg">
          I started with my first Programming Language as Python at the age of 16. Using a programming language to make a computer do whatever I want, felt like a superpower to me<br/> <br />
          As I started to dig deeper I explored Data Structures and Algorithms and started Competitive Programming <br />
          With time, I explored many other technologies and created numerous projects <br /> <br />
          Having the same excitement and interest in exploring new technologies, I am ready to apply my knowledge and experience to help you with your projects
        </div>
      </div>
    </section>
  )
}