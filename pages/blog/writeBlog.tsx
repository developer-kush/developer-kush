import axios from "../../Utils/Axios"
import Link from "next/link";
import { useRef, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import RenderMD from "../../components/Utils/RenderMD";

export default function Write(){

    const [preview, setPreview] = useState(false); 
    // const [body, setBody] = useState('');

    const title = useRef('')
    const subtitle = useRef('')
    const body = useRef('')
    const secret = useRef('')

    const togglePreview = ()=>{
        if (!preview){
            // setTitle(document.getElementById('CONTENT')?.innerHTML || '');
            // setSubtitle(document.getElementById('SUBTTTLE')?.innerHTML || '');
            // setBody(document.getElementById('BODY')?.innerHTML || '');
            console.log(body.current)
        }
        setPreview(preview => !preview);
        console.log('preview toggled', !preview)
        console.log("Body :", body)
    }

    const submitPost = async ()=>{
        // return true;
        const res = axios.post('/blog/addBlog',{
            title: title.current,
            subtitle: subtitle.current,
            body: body.current,
            secretKey: secret.current
        }).catch(err =>{
            console.log("ERROR :", err)
        })
        console.log(res)
    }

    return (
        <div className="relative flex bg-black font-DM justify-center">
            <title>Write a Blog</title>
            <div className="fixed min-h-screen bg-navyBlue left-0 select-none sm:w-1/5 hidden sm:flex flex-col items-center text-white">
                {/* <div className="text-[180px] opacity-70 font-bebas -rotate-90 tracking-widest">Blog</div> */}
                <Link draggable={false} href='/' className="mb-0 w-full bg-lime-400 text-black font-bold tracking-wide h-30 -500 font-bebas flex items-center justify-center py-8 text-3xl"> Home </Link>
                <Link href='/blog' className="w-full h-30  font-bebas bg-emerald-800 flex items-center justify-center py-8 text-lg"> All Blogs </Link>
                <input className="outline-none bg-black text-white p-3 py-4 my-0 w-full text-center" placeholder="Secret Key ..." onChange={e=>{
                    secret.current = e.target.value
                }} />
                <div onClick={togglePreview} className={`${preview?"bg-red-500":"bg-blue-500"} mt-10 hover:${preview?"bg-red-600":"bg-blue-600"} text-lg font-medium flex items-center justify-center px-10 py-5 rounded-md w-40 cursor-pointer transition-colors duration-300 font-DM`}>{preview?"Edit":"Preview"}</div>
                <div onClick={submitPost} className={`bg-green-500 hover:bg-blue-600" mt-5 text-lg font-medium flex items-center justify-center px-10 py-5 rounded-md w-40 cursor-pointer transition-colors duration-300 font-DM`}>Submit</div>
            </div>
            {/* <div className="md:w-3/4 w-full bg-[#1d2e23] p-6 text-white min-h-screen font-mono"> */}
            <div className="right-0 min-h-screen absolute w-full sm:w-4/5 bg-black text-white font-mono overflow-x-hidden">
                {
                    preview? <div className="bg-[#080808] min-h-screen h-full w-full">
                        <div className="mt-6 mx-6 py-6 text-5xl font-DM font-medium tracking-tight">{title.current}</div>
                        <div className="mx-6 pb-6 text-2xl font-DM font-light tracking-tight">{subtitle.current}</div>
                        <div className="mx-6 relative font-DM text-lg mt-5 px-10 md:px-24 ">
                            <RenderMD className="" >{body.current}</RenderMD>
                        </div>
                        <div className="bg-[#151515] min-h-[300px] mt-10"></div>
                    </div>

                    :<div className="h-full w-full">
                        <input className="p-6 pb-3 w-full text-5xl font-DM font-medium tracking-tight bg-black text-white outline-none"  placeholder="Title" onChange={e => title.current = e.target.value} defaultValue={title.current} />
                        <input className="pb-6 px-6 text-2xl w-full font-DM font-light tracking-tight bg-black text-white outline-none"  placeholder="Subtitle" onChange={e => subtitle.current = e.target.value} defaultValue={subtitle.current} />
                        <textarea onChange={e=>{
                            body.current = e.target.value
                        }} rows={18} defaultValue={body.current} placeholder="Body goes here ..." className="bg-[#111111] w-full p-6 outline-none"/>
                        <div className="h-20 bg-black"></div>
                    </div>
                }
            </div>
        </div>
    )
}