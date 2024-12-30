import { useState } from 'react'
import './App.css'
import HeaderTop from './Components/Header/HeaderTop'
import Dishes from './Components/Utestner/Dishes'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <HeaderTop />
      <Dishes/>
      <Footer/>
    </>
  )
}

export default App
