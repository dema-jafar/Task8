import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'
import Pricing from './components/Pricing/Pricing'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
// import {faTwitter} from '@fortawesome/free-brands-svg-icons'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <div>
      <FontAwesomeIcon icon={faTwitter} />

      </div>
      <Services />
      <Pricing />
      <Footer />
    </>
  )
}

export default App
