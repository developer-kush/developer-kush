import Link from 'next/link';
import Icons from './Icons';

export default function Navbar(props:any){

  const {title, className} = props;

  const colorlist = ['hover:text-teal-500','hover:text-red-500','hover:text-yellow-500']

  return (
    <div id="NAVBAR" className={`font-quicksnad sticky z-10 top-0 flex backdrop--md justify-between w-full h-20 text-white shadow-md bg-gradient-to-b from-black to-transparent b0 -mb-20 `}>

      <Link href='/#INTRO' className={'flex items-center ml-6 text-3xl sm:ml-20 font- font-bebas '}>
        {
          ['K','U','S','H','A','G','R','A',' ','A','G','A','R','W','A','L'].map((i,idx)=>{
            return <span key={idx} className={`flex items-center h-20 transition-all duration-100 ease-in cursor-pointer hover:-translate-y-1 ${colorlist[idx%3]}`}>{i==' '?<div className='px-1 text-transparent'>.</div>:i}</span>
          })
        }

        { title && <div className='hidden sm:flex px-2.5 py-1.5 m-3 rounded-full items-center justify-center text-xs font-DM bg-opacity-30 font-bold bg-gradient-to-br from-cyan-400 to-violet-500 text-black'>{title}</div> }
      </Link>

      <div className='flex items-center text-[#cccccc] mx-2 sm:mr-20 font-quicksand font-bold '>
        <div className='hidden transition-allduration-200 ease-in cursor-pointer hover:text-white'>
          <span className='flex w-8 h-8'>{Icons.terminal}</span>
        </div>
        { title!=='Blog' &&<Link href="/blog" className='flex px-5 transition-all duration-200 ease-in hover:text-white font-bebas tracking-wider font-extralight text-lg' >Blog</Link> }
        {/* <Link href="/projects" className='flex px-5 transition-all duration-200 ease-in hover:text-white'>Work</Link>
        <Link href="/contact" className='flex px-5 transition-all duration-200 ease-in hover:text-white'>Contact</Link> */}
      </div>
      
    </div>
  )
}