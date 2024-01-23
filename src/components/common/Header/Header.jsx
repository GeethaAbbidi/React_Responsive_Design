import React from 'react'
import './Header.css'
import NavBar from './NavBar/NavBar'
// import Features from '../../pages/Features'
import { Routes, Route } from 'react-router-dom'
import Pricing from '../../../Pages/PricingPage/Pricing'
import Features from '../../../Pages/FeaturesPage/Features'
import Stories from '../../../Pages/StoriesPage/Stories'
import HomePage from '../../../Pages/HomePage/HomePage'
import MainFooter from '../MainFooter/MainFooter'


function Header() {
  // let component

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Stories' element={<Stories />} />
        <Route path='/Features' element={<Features />} />
        <Route path='/Pricing' element={<Pricing />} />
      </Routes>
    </>
  )
}

export default Header