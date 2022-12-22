import Layout from '../components/Layout'
import Image from 'next/image'

export default function Home() {

  return (
    <Layout activePage = "Home">
      <div className='relative overflow-hidden isolate h-full w-full flex'>
        <div className="flex-col m-10 ">
          <div className='text-9xl p-3 bg-gradient-to-tr bg-clip-text from-black to-[#0e0e0e] text-transparent font-bold font-mono'>Kushagra<br/>Agarwal</div>
          <div className='text-black p-3 text-4xl font-bold uppercase'>Budding Software Developer</div>
          <div className='bg-gradient-to-r from-black rounded-l-md py-3 px-5 text-2xl font-semibold text-white'>Check out my Projects</div>
        </div>
        <Image className='-z-10 absolute opacity-80' src="/img/home-bg.jpg" width={1440} height={800} draggable="false" alt="Bg"/>
      </div>

    </Layout>
  )

  // return (
  //     <div className="fixed h-screen w-full bg-black">
  //       <Head><title>Kushagra Agarwal</title></Head>
  //       <div className='h-full font-bold'>
  //         <div className='select-none flex-col h-full align-middle items-center m-32'>
  //           <div className='px-5 py-5 text-9xl bg-gradient-to-br from-blue-600 to-blue-300 bg-clip-text text-transparent'>Ku<span className='bg-[#222222] h-fit rounded-md text-white'>sh</span>agra<br/>Agarwal</div>
  //           <div className='p-5 text-4xl uppercase text-white'>Software Development Enthusiast</div>
  //         </div>
  //       </div>
  //     </div>
  // )
}
