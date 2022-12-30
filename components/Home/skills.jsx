import { be_veitnam_pro, indie_flower } from "../Utils/Fonts"
import Image from 'next/image'

export default function Skills(){
  return (
    <section id = "skills" className={'flex text-[#999999] flex-col md:flex-row bg-black py-4 px-2 md:px-20 text-2xl items-center h-fit w-full isolate '+indie_flower}>
      <div className="text-6xl p-4 text-white md:hidden">Skills</div>

      <div className="md:w-1/3 flex flex-col gap-y-3 p bg-black">
        <div>Data Structures and Algorithms</div>
        <div>Competitive Programming</div>
        <div className="flex gap-x-6"> <div>Python</div> <div>C / C++</div> <div>Java</div> </div>
        <div></div>
        <div className="flex gap-x-6"><div>Database Systems</div> <div>MySQL</div></div>
        <div>Object Oriented Programming</div>
      </div>
      <div className="md:w-1/3 flex flex-col gap-y-3 p bg-black">
        <div></div>
        <div className="flex gap-x-6"> <div>HTML</div> <div>CSS</div> <div>JavaScript</div> </div>
        <div className="flex gap-x-6"> <div>React.js</div> <div>Next.js</div></div>
        <div className="flex gap-x-6"> <div>BootStrap CSS</div> <div>Tailwind CSS</div></div>
        <div>Discrete Mathematics</div>
      </div>
      <div className="relative w-1/3 hidden bg-[#dbdcc8] rounded-3xl md:flex justify-center items-center">
        <div className={`absolute text-black flex text-[10rem] `+indie_flower}>Skills</div>
        <Image className="flex m-auto rounded-3xl" src="/img/innovate.png" width={500} height={500} alt=""/>
      </div>
    </section>
  )
}