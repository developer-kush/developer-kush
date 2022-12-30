import { be_veitnam_pro, indie_flower } from "../Utils/Fonts"

export default function About(){
  return (
    <section id = "story" className='flex flex-col w-full h-full px-10 bg-navyBlue'>
      <div id="s2_title" className='opacity-0 transition-opacity duration-150 ease-in flex items-center w-full py-20'>
        {/* <div className='flex w-full h-2 text-transparent my-9 bg-glowBlue'>|</div> */}
        <div className={'h-20 m-5 flex justify-center items-center text-6xl text-white font-bold w-max '+indie_flower}>Story</div>
        <div className='h-0.5 my-10 w-full bg-glowBlue flex text-transparent'>|</div>
      </div>
    </section>
  )
}