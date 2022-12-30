import Image from "next/image";
import Layout from "../components/Utils/Layout";


const projectItem = ({children}:any) => {
  return (
    <div>

    </div>
  )
}

export default function Projects(){

  const pageNavLinks = [
    ["pydast","Pydast"], ["contestizer", "Contestizer"]
  ]

  return (
    <Layout activePage = "projects" pageNavLinks={pageNavLinks}>

    <div className="w-full h-full">
      

      <div id="pydast" className="w-full p-4">
        <div className="flex-col items-center justify-center w-4/5 rounded-lg">

          <h1 className="text-5xl font-bold">Pydast</h1>
          <div className="p-4 h-fit w-fit">
          {/* <Image className="rounded-lg" src="/img/pydasthome.png" width={1000} height={700} alt="Pydast" draggable="false"/> */}
          </div>
        </div>
      </div>
      
      <div id="contestizer" className="w-full p-4">
        <div className="flex-col items-center justify-center w-4/5 rounded-lg">
          <h1 className="text-5xl font-bold text-white">Contestizer</h1>
        </div>
      </div>
      
    </div>

    </Layout>
  )
}