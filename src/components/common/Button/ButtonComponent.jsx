import React, { useState } from 'react'
// import { assets } from '../../../assets/assets'
import './Button.css'


export default function ButtonComponent({ text ,textColor ,required}) {

  return (
    <>
      <div className='mainButton'>
        <button type='button' className={textColor ? 'whiteButton' :'blackButton'}>{text}</button> 
        <span className='buttonArrow'>&#10230;</span> 
      </div>
    </>
  )
}

//{required ?  'mainButton' :'' }
