import { be_veitnam_pro, indie_flower } from "../Utils/Fonts"
import Image from 'next/image'

export default function Skills(){

  const cardstyle = " xl:bg-glowBlue transition-all duration-200 ease-out xl:text-black xl:hover:text-[#dbdcc8] xl:hover:bg-black rounded-full w-fit py-1 px-3 "

  return (
    <section id = "skills" className={'flex text-[rgb(153,153,153)] flex-col bg-black pt-14 sm:pt-4 py-4 px-2 lg:px-20 text-2xl items-center h-fit w-full isolate '+indie_flower}>
      <div className="p-4 text-6xl text-white xl:hidden">Skills</div>

      <div className="w-full flex flex-col sm:flex-row items-center justify-center">
        <div className="flex flex-col bg-black lg:1/2 xl:w-1/3 gap-y-3">
          <div className={cardstyle}>Data Structures and Algorithms</div>
          <div className={cardstyle}>Competitive Programming</div>
          <div className="flex gap-x-6"> <div className={cardstyle}>Python</div> <div className={cardstyle}>C / C++</div> <div className={cardstyle}>Java</div> </div>
          <div></div>
          <div className="flex gap-x-6"><div className={cardstyle}>Database Systems</div> <div className={cardstyle}>MySQL</div></div>
          <div className={cardstyle}>Object Oriented Programming</div>
        </div>
        <div className="flex flex-col bg-black lg:1/2 xl:w-1/3 gap-y-3 p">
          <div></div>
          <div className="flex gap-x-6"> <div className={cardstyle}>HTML</div> <div className={cardstyle}>CSS</div> <div className={cardstyle}>JavaScript</div> </div>
          <div className="flex gap-x-6"> <div className={cardstyle}>React.js</div> <div className={cardstyle}>Next.js</div></div>
          <div className="flex gap-x-6"> <div className={cardstyle}>BootStrap CSS</div> <div className={cardstyle}>Tailwind CSS</div></div>
          <div className={cardstyle}>Discrete Mathematics</div>
        </div>
        <div className="relative w-1/3 hidden bg-[#dbdcc8] rounded-3xl xl:flex justify-center items-center">
          <div className={`absolute text-black flex text-[10rem] bg-white bg-opacity-40 p-12 items-center `+indie_flower}>Skills</div>
          <Image className="flex m-auto rounded-3xl" src="/img/innovate.png" width={500} height={500} alt=""/>
        </div>
      </div>
    </section>
  )
}