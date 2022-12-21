import { Ubuntu } from '@next/font/google'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='fixed h-screen w-full bg-black'>
      <Head><title>Kushagra Agarwal</title></Head>
      <div className='h-full font-bold'>
        <div className='select-none flex-col h-full align-middle items-center m-32'>
          <div className='px-5 py-5 text-9xl bg-gradient-to-br from-blue-600 to-blue-300 bg-clip-text text-transparent'>Ku<span className='bg-[#222222] h-fit rounded-md text-white'>sh</span>agra<br/>Agarwal</div>
          <div className='p-5 text-4xl uppercase text-white'>Software Development Enthusiast</div>
        </div>
      </div>
    </div>
  )
}
