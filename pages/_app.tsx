import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { createContext, useContext } from 'react'

const AppContext = createContext(null)

export default function App({ Component, pageProps }: AppProps) {

  return <div>
      <Component {...pageProps} />
    </div>
  
}
