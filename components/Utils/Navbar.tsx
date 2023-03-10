import Link from 'next/link';
import Icons from '../../public/icons/icons';
import { oswald, bebas_neue } from './Fonts';

export default function Navbar({className}:any){

  const colorlist = ['hover:text-teal-500','hover:text-red-500','hover:text-yellow-500']

  return (
    <div className={`${oswald} sticky z-10 top-0 flex backdrop-blur-md justify-between w-full h-20 text-white shadow-md bg-[#0f0f0f] -mb-20 ${className}`}>

      <Link href='/#intro' className={'flex items-center ml-6 text-3xl sm:ml-20 font-bold font-sans '+bebas_neue}>
        {
          ['K','U','S','H','A','G','R','A',' ','A','G','A','R','W','A','L'].map((i,idx)=>{
            return <span key={idx} className={`flex items-center h-20 transition-all duration-100 ease-in cursor-pointer hover:-translate-y-1 ${colorlist[idx%3]}`}>{i==' '?<div className='px-1 text-transparent'>.</div>:i}</span>
          })
        }
      </Link>

      <div className='hidden sm:flex items-center text-[#cccccc] mx-2 sm:mr-20'>
        <div className='hidden transition-all duration-200 ease-in cursor-pointer hover:text-white'>
          <span className='flex w-8 h-8'>{Icons.terminal}</span>
        </div>
        <Link href="/blog" className='flex px-5 transition-all duration-200 ease-in hover:text-white'>Blog</Link>
        <Link href="/projects" className='flex px-5 transition-all duration-200 ease-in hover:text-white'>Projects</Link>
        <Link href="/contact" className='flex px-5 transition-all duration-200 ease-in hover:text-white'>Contact</Link>
      </div>
      
    </div>
  )
}