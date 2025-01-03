import { useState } from 'react'
import  Navbar  from './components/Navbar.jsx'
import  Hero  from './components/Hero.jsx'
import  HighLights  from './components/HighLights.jsx'
import  Model  from './components/Model.jsx'
import  DetaliedIPhone  from './components/DetaliedIPhone.jsx'
import  ProChip  from './components/ProChip.jsx'
import  Footer  from './components/Footer.jsx'
import './index.css'; 
import * as Sentry from "@sentry/react";

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <main className='bg-black'>
        <Navbar />
        <Hero /> 
        {/* // <HighLights /> */}
        <Model />
        <DetaliedIPhone />
        <ProChip />
        <Footer />
        </main>
    </>
  )
}

export default Sentry.withProfiler(App)
