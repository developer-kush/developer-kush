import Layout from "../components/Utils/Layout";
import Navbar from "../components/Utils/Navbar";
import { indie_flower, oswald } from '../components/Utils/Fonts';


export default function NotFound(){
  return(
    <div className="bg-navyBlue h-screen w-full justify-center">
      <Navbar/>
      <div className="text-[#eeeeee] flex items-center w-full h-full text-7xl justify-center">
        <div className={oswald}>404 | Not Found</div>
      </div>
    </div>
  )
}