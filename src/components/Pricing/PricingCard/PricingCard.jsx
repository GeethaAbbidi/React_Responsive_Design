import React from 'react'
import PricingCardData from './PricingCardData'
import DarkContainer from '../../common/Container/DarkContainer/DarkContainer'
const PricingCard = () => {
  return (
    <div>
      <div className='featuresInfoCard'>
        {PricingCardData.map((item, index) => {
          return (
            <DarkContainer
              src={item.src}
              heading={item.heading}
              para={item.para}
              gradient={true}
              key={index}
            />
          )
        })
        }
      </div>
    </div>
  )
}

export default PricingCard