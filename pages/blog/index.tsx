import Navbar from "../../components/Utils/Navbar";
import { useEffect, useState } from "react";
import Axios from "../../Utils/Axios";
import { useRouter } from "next/router";

export default function BlogPage(props:any){

    const router = useRouter()
    
    if (router.isFallback) {
      return (
        <div className="bg-black h-screen w-screen flex items-center justify-center">
          <h1 className="text-white text-5xl">Loading...</h1>
        </div>
      )
    }

    const [blogs, setBlogs] = useState(props.blogs)

    // useEffect(()=>{
    //   const res = Axios.get('/blog/blogs').then(response=>setBlogs(response.data)).catch(err=>console.log("ERROR :",err.response.data.message))
    //   console.log("RES:",res)
    //   // setBlogs(res?.data)
    // },[])

    return(
        <div className="relative flex font-DM justify-center">
          <title>Blog</title>
          <Navbar className="fixed"/>
          <div className="fixed min-h-screen bg-navyBlue left-0 select-none sm:w-1/5 hidden sm:flex flex-col items-center justify- text-white">
            {/* <div className="text-[180px] opacity-70 font-bebas -rotate-90 tracking-widest">Blog</div> */}
          </div>
          {/* <div className="md:w-3/4 w-full bg-[#1d2e23] p-6 text-white min-h-screen font-mono"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 right-0 overflow-y-scroll h-screen pt-28 absolute w-full sm:w-4/5 bg-black p-6 text-white">
            {
              blogs? blogs.map((blog:any, index:number)=>{
                return <a key={index} href={"/blog/"+blog.blogID} className="w-full h-80 sm:h-64 group flex flex-col gap-3 cursor-pointer text-2xl rounded-lg bg-[#0a0a0a] p-2">
                  <div className="bg-[#111111]">
                    <div className="rounded-md bg-[#272822] h-24 flex flex-col justify-evenly px-5 py-3">
                      <span className="text-xl sm:text-3xl font-medium">{blog.title}</span>
                      <span className="text-base sm:text-xl">{blog.subtitle}</span>
                    </div>
                    <div className="relative h-52 sm:h-36 font-mono flex flex-col sm:flex-row justify-between p-2">
                      <div className="w-full sm:w-[58%] sm:h-[8rem] text-sm  text-ellipsis overflow-clip p-2 font-mono lg:w-[68%]">
                        {blog.description}
                      </div>
                      <div className="w-full sm:w-[38%] sm:p-2 lg:w-[28%] text-white font-bold text-center flex sm:flex-col justify-evenly text-sm gap-y-2">
                        <div className="p-2 my-2 mx-2 w-1/2 sm:w-full rounded-md bg-cyan-700">60+ Views</div>
                        <div className="p-2 my-2 mx-2 w-1/2 sm:w-full rounded-md bg-red-700">30+ Likes</div>
                      </div>
                    </div>
                  </div>
                </a>
              }) : null
            }
          </div>
        </div>
    )
}

export async function getStaticProps(){

  const blogs = await Axios.get('/blog/blogs').then(response=>response.data).catch(err=>console.log("ERROR :",err.response.data.message))

  return {
    props: {
      blogs : blogs,
      fallback : true
    },
    revalidate: 60
  }
}