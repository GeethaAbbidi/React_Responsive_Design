import React from 'react'
import "./Card.css"
import ReadButton from '../Button/ReadButton'

export const Card = ({ cardData, cardHeading, cardText, img }) => {
    return (

        <div className='card'>
            <div className='cardContainer' >
                <img src={img} alt="" />
                <div className='cardDescription'>
                    <div className='cardInfo'>
                        <p className='cardText'>{cardData}</p>
                        <p className='cardHeading'>{cardHeading}</p>
                        <p className='cardText'>{cardText}</p>
                    </div>
                    <ReadButton />
                </div>
            </div>
        </div>

    )
}
