import React from 'react'
import PlanCard from '../CardCreation/PlanCard'
import PriceCardData from './PriceCardData'
import './PriceCard.css'
const PriceCard = () => {
    return (
        <>
        <div className='plan'>
            <p className='para'>Monthly</p>
            <div className='toggleButton'><div className='toggleButtonOff'></div></div>
            <p className='para light'>Yearly</p>
        </div>
        <div className='priceCard'>
            {PriceCardData.map((item, index) => {
                return (
                    <PlanCard
                        key={index}
                        planCard={item.planCard}
                        heading={item.heading}
                        para={item.para}
                        button={item.button}
                        price={item.price}
                    />
                )
            })
            }
        </div>
        </>
    )
}

export default PriceCard