import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function Home() {
  return (
    <div className='home-container'>
        <Header/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default Home