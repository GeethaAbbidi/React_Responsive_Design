import React from 'react'
import './PlanCard.css'

const PlanCard = ({ heading, para, price, button, planCard }) => {
    // const planCard=false
    return (
        <div className='priceCard'>
            <div className='priceflex'>
                <span className={planCard ? '' : 'gradient'}></span>
                <div className={planCard ? 'planCardLight' : 'planCardDark'}>
                    <h2>{heading}</h2>
                    <p>{para}</p>
                    <div className='centerPlanCard'>
                        <h1>{price}</h1>
                        <p>per month</p>
                    </div>
                    <button type='button' className={button ? 'planButtonLight' : 'planButtonDark'}>PICK PLAN</button>
                </div>
            </div>
        </div>
    )
}

export default PlanCard
