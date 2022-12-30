import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Icons from "../../public/icons/icons"

export default function Layout ({ children, activePage, pageNavLinks }:any){

  // console.log("Rendered")

  if (pageNavLinks==undefined){
    pageNavLinks = [];
  }

  const [pageLinksActive, setPageLinksActive] = useState(true)

  function togglePagePanes(checkfor:string){
    if(activePage.toLowerCase() == checkfor){
      setPageLinksActive(!pageLinksActive)
    }
  }

  const navlinks: any = [
    [Icons.home, 'Home','/'], 
    [Icons.projects,'Projects','/projects'], 
    [Icons.phone, 'Contact', '/contact']
  ]

  const toggleFullScreen = () => {
    if ( document.fullscreenEnabled ){
      if (document.fullscreenElement){
        document.exitFullscreen()
      }
      else{
        document.documentElement.requestFullscreen()
      }
    }
  }

  const closeWebsite = () => {
    close()
  }

  return (
    <div className="fixed w-full h-[100vh] select-none">

      <Head><title>Kushagra Agarwal</title></Head>

      {/* Header */}
      <div className="flex w-full font-semibold justify-between bg-[#3d3d3d] text-[#c5c5c5]">
        <ul className="hidden sm:flex py-1 ml-12 text-sm">
          <li className="hover:bg-[#555555] p-1 rounded-md">Welcome</li>
          <li className="hover:bg-[#555555] p-1 rounded-md">to</li>
          <li className="hover:bg-[#555555] p-1 rounded-md">my</li>
          <li className="hover:bg-[#555555] p-1 rounded-md">portfolio</li>
        </ul>
        <div className="py-2 text-sm">Kushagra_Agarwal - portfolio</div>
        {/* Temporary */}
        <div className="flex font-normal text-transparent">
          <div className="text-white cursor-pointer py-1 hover:bg-[#555555] w-12 flex justify-center" onClick={toggleFullScreen}>o</div>
          <div className="flex justify-center w-12 py-1 text-white cursor-pointer hover:bg-red-500" onClick={closeWebsite}>x</div>
        </div>
      </div>

      {/* Rest Page */}
      <div className="flex w-full h-screen">

        {/* Navbar */}
        <div className="w-14 z-10 h-full bg-[#333333]">
          <ul className="w-full">
            {
              navlinks.map(([item, tooltip, itemlink]:any,idx: number)=>{
                return (
                  <div key={idx} onClick={()=>togglePagePanes(tooltip.toLowerCase())}>
                    <Link href={itemlink}
                    className={`relative h-14 border-l-2 group border-transparent ${tooltip.toLowerCase()==activePage.toLowerCase()?"border-white text-white":"text-[#797979]"} cursor-pointer w-full flex justify-center items-center  hover:text-white`}>
                      <div className="h-7 w-7">{item}</div>
                      <div className="absolute rounded-sm text-xs p-1 bg-[#252525] left-14 hidden group-hover:flex outline-1 outline">{tooltip}</div>
                    </Link>
                  </div>
                )
              })
            }
          </ul>
        </div>

        {/* Pages Pane */}
        <div className={`${pageLinksActive?"sm:flex":""} hidden bg-[#252525] w-48 flex-col`}>
          <div className="flex p-2 px-4 text-xs text-white uppercase">Page - Navigation</div>
          {
            pageNavLinks.map((item:any,idx:number)=>{
              return <Link key={idx} className="w-full px-4 py-1 text-sm text-white transition-all duration-150 ease-in hover:text-black hover:bg-blue-400" href = {`#${item[0]}`} >{item[1]}</Link>
            })
          }
        </div>

        {/* Content Pane */}
        <div className="bg-[#1e1e1e] w-full text-white">
          <div className="bg-[#252525] text-xs">
            <div className="p-2 bg-[#1e1e1e] w-28">{activePage}.tsx</div>
          </div>
          <div className="absolute w-full h-full overflow-y-scroll isolate">
            {children}
          </div>
        </div>
      </div>

      {/* <Image className="" src="/img/bg.png" draggable="false" width= {1440} height = {640} alt="bg"/> */}
    </div>
  )
}
