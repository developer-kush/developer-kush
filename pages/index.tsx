import Navbar from '../components/Utils/Navbar';
import { useEffect } from 'react';

export default function Home() {

  return(
    <div id="HomePage" className={`absolute h-[100vh] overflow-y-scroll overflow-x-hidden select-none w-full`}>
      <title>Kushagra Agarwal</title>
      <Navbar className="bg-transparent"/>
      <div className={`w-[100vw] h-full overflow-x-hidden overflow-y-scroll scroll-smooth bg-navyBlue isolate`}>

      </div>
    </div>
  )

}
