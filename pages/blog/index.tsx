import Navbar from "../../components/Utils/Navbar";
import { useEffect, useState } from "react";
import Axios from "../../Utils/Axios";
import { useRouter } from "next/router";

export default function BlogPage(){

    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      Axios
      .get('/blog/blogs').then(response=>response.data)
      .then(blogs=>{
        blogs.sort((a:any,b:any)=>a.createdAt>b.createdAt?-1:1)
        return blogs
      }).then((blogs:any)=>{
        setBlogs(blogs)
        setLoading(false)
      })
      .catch(err=>{
        setLoading(false)
        console.log(err)
        return []
      })
    },[])

    const router = useRouter()
    
    if (router.isFallback) {
      return (
        <div className="bg-black h-screen w-screen flex items-center justify-center">
          <h1 className="text-white text-5xl">Loading...</h1>
        </div>
      )
    }


    useEffect(()=>{
      console.log("Blogs : ", blogs, JSON.stringify(blogs), JSON.stringify(blogs)==='[]')
    },[blogs])

    return(
        <div className="relative flex font-DM justify-center">
          <title>Blog</title>
          <Navbar title='Blog' className="fixed"/>
          <div className="fixed min-h-screen left-0 select-none sm:w-1/5 hidden sm:flex flex-col bg-[url('/Screens_BG.jpeg')] items-center h-screen text-white">
            <div className="bg-black bg-opacity-60 h-full w-full">
              
            </div>
          </div>
          {/* <div className="md:w-3/4 w-full bg-[#1d2e23] p-6 text-white min-h-screen font-mono"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6 right-0 overflow-y-scroll h-screen pt-[6.5rem] absolute w-full sm:w-4/5 bg-black p-6 text-white">
              { 
                loading ? <div className="absolute text-center px-3 pt-16 bg-black h-full w-full flex flex-col gap-5 items-center justify-center">
                <div className="font-DM textwhite text-5xl ">Loading ... </div>
              </div> : (blogs && JSON.stringify(blogs) != "[]") ? blogs.map((blog:any, index:number)=>{
                  return <a key={index} href={"/blog/"+blog.blogID} className="w-full h-80 sm:h-64 group flex flex-col gap-3 cursor-pointer text-2xl rounded-lg bg-[#181818] sm:bg-[#111111] p-2">
                    <div className="bg-[#181818]">
                      <div className="rounded-md bg-[#2a2a2a] h-24 flex flex-col justify-evenly px-5 py-3">
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
                }) : <div className="absolute text-center px-3 pt-16 bg-black h-full w-full flex flex-col gap-5 items-center justify-center">
                <div className="font-DM textwhite text-5xl ">No Blogs Found ... </div>
                <div>💡 Try checking your Internet Connection</div>
                <div onClick={()=>{
                  location.reload()
                }} className="bg-white hover:bg-[#ddd] hover:border-[#222] ccc-black border-4 m-2 transition-all duration-200 text-black px-4 py-2.5 rounded-full cursor-pointer font-bold">Refresh</div>
              </div>
              }
          </div>
        </div>
    )
}

// export async function getStaticProps(){

//   let blogs = await Axios
//     .get('/blog/blogs').then(response=>response.data)
//     .catch(err=>{
//       console.log()
//       return []
//     })
//   blogs = blogs.sort((a:any,b:any)=>a.createdAt>b.createdAt?-1:1)

//   return {
//     props: {
//       blogs : blogs,
//       fallback : true
//     },
//     revalidate: 300
//   }
// }