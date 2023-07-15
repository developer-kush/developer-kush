import Link from "next/link";
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

    console.log("Props :",props)

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
          <div className="grid grid-cols-2 gap-6 right-0 overflow-y-scroll h-screen pt-32 absolute w-full sm:w-4/5 bg-black p-6 text-white">
            {
              blogs? blogs.map((blog:any, index:number)=>{
                return <a href={"/blog/"+blog.blogID} className="w-full flex flex-col gap-3 cursor-pointer bg-[#272822] px-5 py-3 text-2xl rounded-lg border-x-8 border-y-8 border-[#111111]">
                  <span className="text-3xl font-medium">{blog.title}</span>
                  <span className="text-xl">{blog.subtitle}</span>
                </a>
              }) : null
            }
          </div>
        </div>
    )
}

export async function getServerSideProps(){

  const blogs = await Axios.get('/blog/blogs').then(response=>response.data).catch(err=>console.log("ERROR :",err.response.data.message))

  return {
    props: {
      blogs : blogs,
      fallback : true
    }
  }
}