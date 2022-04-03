import React from 'react'
import Hero from '../hero/Hero'
import Navbar from '../navbar/Navbar'
import './main.scss'

function Main() {
  return (
    <div className="main">
        <Navbar />
        <Hero />
    </div>
  )
}

export default Main