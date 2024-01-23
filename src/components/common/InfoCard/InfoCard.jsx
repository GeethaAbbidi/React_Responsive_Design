import React from 'react'
import './InfoCard.css'

const InfoCard = ({ src, maintext, subtext }) => {

  return (
    <div className='infoCard'>
      <div className='infoCardContainer'>
        <div className='cardInformation'>
          <img src={src} alt="" />
          <p className='mainText'>{maintext}</p>
          <p className='subText'>{subtext}</p>
        </div>
      </div>
    </div>
  )
}

export default InfoCard