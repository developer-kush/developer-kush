import Layout from "../components/Utils/Layout";
import Navbar from "../components/Utils/Navbar";

export default function NotFound(){
  return(
    <div className="bg-navyBlue h-screen w-full justify-center">
      <Navbar/>
      <div className="text-[#eeeeee] flex items-center w-full h-full text-6xl justify-center">
        <div className="font-bebas">404 | Not Found</div>
      </div>
    </div>
  )
}