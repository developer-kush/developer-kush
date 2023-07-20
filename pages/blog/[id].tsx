import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "../../Utils/Axios"
import RenderMD from "../../components/Utils/RenderMD";

type BlogType = {
  title: string,
  subtitle: string,
  createdAt: Date,
  body: string
}

export default function BlogPage(){

  const router = useRouter()
  const blogID = router.query.id

  // console.log("Router :",router)

  const [active, setActive]:[any ,any] = useState(null)

  useEffect(()=>{
    console.log('Fetching ... :', '/blog/blogs/'+blogID)
    axios.get('/blog/blogs/'+blogID)
    .then(data => {
      console.log("NEW Data : ",data)
      setActive(data.data)
    })
    .catch(err=>console.log(err))
  },[blogID])

  const prettyDate = (d: string) => {
    let date = new Date(d)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October','November','December']
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }

  return(
    <div className="relative flex bg-black font-DM justify-center">
      <title>{active && active.title || blogID}</title>
      <div className="fixed min-h-screen bg-navyBlue left-0 select-none sm:w-1/5 hidden sm:flex flex-col items-center text-white">
        {/* <div className="text-[180px] opacity-70 font-bebas -rotate-90 tracking-widest">Blog</div> */}
        <Link draggable={false} href='/' className="mb-0 w-full font-bold tracking-wide h-30 bg-lime-400  text-black font-bebas flex items-center justify-center py-6 text-3xl flex-col gap-y-1">
          <span>Kushagra</span>
          <span>Agarwal</span>
        </Link>
        <Link href='/blog' className="mb-0 w-full h-30 bg-emerald-800 font-bebas font-medium flex items-center justify-center py-8 text-2xl tracking-widest"> All Blogs </Link>

      </div>
      {/* <div className="md:w-3/4 w-full bg-[#1d2e23] p-6 text-white min-h-screen font-mono"> */}
      { active ?
        <div className="right-0 min-h-screen absolute w-full sm:w-4/5 bg-black text-white font-mono overflow-x-hidden">
          <Link href="/blog" className="w-full rounded-br-md px-6 pb-4 text-3xl bg-[#111] sm:hidden">..<span className="text-sm">/All_Blogs</span></Link>
          { active.createdAt && <span className="bg-[#111111] mt-10 sm:mt-6 mx-6 px-2 py-1 flex items-center justify-center w-fit rounded-md">{prettyDate(active.createdAt)}</span> }
          <div className="py-6 mx-6 text-5xl font-DM font-medium tracking-tight">{active.title}</div>
          <div className="pb-6 mx-6 text-2xl font-DM font-light tracking-tight">{active.subtitle}</div>
          <div id="BODY" className="relative min-h-screen w-full font-mono px-5 sm:px-20 py-6">
            {/* <Renderer content={active.body}/> */}
            <RenderMD className="">{active.body}</RenderMD>
          </div>
          <div className="h-40 bg-[#181818] font-DM flex items-center justify-center">Stay tuned for more ⏰</div>
        </div> : 
        <div className="absolute bg-black right-0 min-h-screen text-3xl text-center font-DM text-white flex items-center justify-center w-full sm:w-4/5">
          <span>Loading...</span>
        </div>
      }
    </div>
  )
}