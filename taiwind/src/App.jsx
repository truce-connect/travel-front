import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Destination from './component/Destination'
import Search from './component/Search'
import Select from './component/Select'
import Carousel from './component/Carousel'
import Footer from './component/Footer'


const App = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
      <Destination/>
      <Search/>
      <Select/>
      <Carousel/>
      <Footer/> 
     </>

    
  )
}

export default App