import Axios from "../../../Utils/Axios"
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRef, useState } from "react";
import RenderMD from "../../../components/Utils/RenderMD";

function handleImageUpload(): Promise<string | undefined> {
    return new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = () => {
        const file = input.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            const base64 = reader.result?.toString()
            resolve(base64);
          };
          reader.readAsDataURL(file);
        } else {
          resolve("");
        }
      };
      input.click();
    });
}

export default function Write(){

    const [preview, setPreview] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const toggleRefresh = () => {
        setRefresh(refresh => !refresh);
    }

    const title = useRef('')
    const subtitle = useRef('')
    const body = useRef('')
    const secret = useRef('')
    const description = useRef('')

    const togglePreview = ()=>{
        setPreview(preview => !preview);
    }

    const submitPost = async ()=>{
        // return true;

        const res = Axios.post('/blog/addBlog',{
            title: title.current,
            subtitle: subtitle.current,
            description: description.current,
            body: body.current,
            secretKey: secret.current
        })

        toast.promise(res, {
            pending: "Submitting ...",
            success: "Blog Created",
            error: "Failed"
        })

        await res.catch(err=>console.log(err))
        console.log("Result:",res)
    }

    const addImage = async ()=>{
        const data = await handleImageUpload()
        body.current = `${body.current} \n\n![Image](${data})\n\n`
        console.log("BODY:", body.current)
        toggleRefresh()
    }

    return (
        <div className="relative flex bg-black font-DM justify-center">
            <ToastContainer autoClose={2000} theme="dark" />
            <title>Write a Blog</title>
            <div className="fixed min-h-screen bg-navyBlue left-0 select-none sm:w-1/5 hidden sm:flex flex-col items-center text-white">
                {/* <div className="text-[180px] opacity-70 font-bebas -rotate-90 tracking-widest">Blog</div> */}
                <Link draggable={false} href='/' className="mb-0 w-full bg-lime-400 text-black font-bold tracking-wide h-30 -500 font-bebas flex items-center justify-center py-8 text-3xl"> Home </Link>
                <Link href='/blog' className="w-full h-30  font-bebas bg-emerald-800 flex items-center justify-center py-8 text-lg"> All Blogs </Link>
                <input type="password" className="outline-none bg-black text-white p-3 py-4 my-0 w-full text-center" placeholder="Secret Key ..." onChange={e=>{
                    secret.current = e.target.value
                }} />
                <div onClick={addImage} className={`${preview?"bg-red-500":"bg-blue-500"} mt-10 hover:${preview?"bg-red-600":"bg-blue-600"} text-lg font-medium flex items-center justify-center px-10 py-5 rounded-md w-40 cursor-pointer transition-colors duration-300 font-DM`}>Add Image</div>
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
                        <input className="py-6 px-6 text-lg w-full font-DM font-light tracking-tight bg-[#222222] text-white outline-none"  placeholder="Description" onChange={e => description.current = e.target.value} defaultValue={subtitle.current} />
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



// import Link from "next/link";
// import { useRef, useState } from "react";

// import Axios from "../../../Utils/Axios"

// // const Axios:any = import("../../../Utils/Axios")
// // console.log("AXIOS", Axios)
// const RenderMD:any = import("../../../components/Utils/RenderMD")



// export default function Write(){

//     const [preview, setPreview] = useState(false);


//     const title = useRef('')
//     const subtitle = useRef('')
//     const body = useRef('')
//     const secret = useRef('')
//     const description = useRef('')

    // const togglePreview = ()=>{
    //     console.log("BODY TYPE : ", typeof body.current)
    //     setPreview(preview => !preview);
    // }





//     return (
//         <div className="relative flex bg-black font-DM justify-center">
//             <title>Write a Blog</title>
//             <div className="fixed min-h-screen bg-navyBlue left-0 select-none sm:w-1/5 hidden sm:flex flex-col items-center text-white">
//                 {/* <div className="text-[180px] opacity-70 font-bebas -rotate-90 tracking-widest">Blog</div> */}
//                 <Link draggable={false} href='/' className="mb-0 w-full bg-lime-400 text-black font-bold tracking-wide h-30 -500 font-bebas flex items-center justify-center py-8 text-3xl"> Home </Link>
//                 <Link href='/blog' className="w-full h-30  font-bebas bg-emerald-800 flex items-center justify-center py-8 text-lg"> All Blogs </Link>
//                 <input className="outline-none bg-black text-white p-3 py-4 my-0 w-full text-center" placeholder="Secret Key ..." onChange={e=>{
//                     secret.current = e.target.value
//                 }} />
//                 <div onClick={togglePreview} className={`${preview?"bg-red-500":"bg-blue-500"} mt-10 hover:${preview?"bg-red-600":"bg-blue-600"} text-lg font-medium flex items-center justify-center px-10 py-5 rounded-md w-40 cursor-pointer transition-colors duration-300 font-DM`}>{preview?"Edit":"Preview"}</div>
//                 <div onClick={submitPost} className={`bg-green-500 hover:bg-blue-600" mt-5 text-lg font-medium flex items-center justify-center px-10 py-5 rounded-md w-40 cursor-pointer transition-colors duration-300 font-DM`}>Submit</div>
//             </div>
//             {/* <div className="md:w-3/4 w-full bg-[#1d2e23] p-6 text-white min-h-screen font-mono"> */}
//             <div className="right-0 min-h-screen absolute w-full sm:w-4/5 bg-black text-white font-mono overflow-x-hidden">
//                 {

//                     preview? <div className="bg-[#080808] min-h-screen h-full w-full">
//                         <div className="mt-6 mx-6 py-6 text-5xl font-DM font-medium tracking-tight">{title.current}</div>
//                         <div className="mx-6 pb-6 text-2xl font-DM font-light tracking-tight">{subtitle.current}</div>
//                         <div className="mx-6 relative font-DM text-lg mt-5 px-10 md:px-24 ">
//                            <RenderMD className="" >{body.current}</RenderMD>
//                         </div>
//                         <div className="bg-[#151515] min-h-[300px] mt-10"></div>
//                      </div>


//                     :<div className="h-full w-full">
//                         <input className="p-6 pb-3 w-full text-5xl font-DM font-medium tracking-tight bg-black text-white outline-none"  placeholder="Title" onChange={e => title.current = e.target.value} defaultValue={title.current} />
//                         <input className="pb-6 px-6 text-2xl w-full font-DM font-light tracking-tight bg-black text-white outline-none"  placeholder="Subtitle" onChange={e => subtitle.current = e.target.value} defaultValue={subtitle.current} />
//                         <input className="py-6 px-6 text-lg w-full font-DM font-light tracking-tight bg-[#222222] text-white outline-none"  placeholder="Description" onChange={e => description.current = e.target.value} defaultValue={subtitle.current} />
//                         <textarea onChange={e=>{
//                             body.current = e.target.value
//                         }} rows={18} defaultValue={body.current} placeholder="Body goes here ..." className="bg-[#111111] w-full p-6 outline-none"/>
//                         <div className="h-20 bg-black"></div>
//                     </div>
//                 }
//             </div>
//         </div>
//     )
// }