import Layout from "../components/Layout";


export default function NotFound(){
  return(
    <Layout title = "Not Found">
      <div className="h-full w-full items-center justify-center flex">
        <div className="text-6xl">404 | Not Found</div>
      </div>
    </Layout>
  )
}