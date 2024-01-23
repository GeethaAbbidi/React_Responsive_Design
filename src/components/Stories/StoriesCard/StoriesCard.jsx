import React from 'react'
import { Card } from '../../common/Card/Card'
import StoriesData from './StoriesData'
import './StoriesCard.css'

const StoriesCard = () => {
    return (
        <div className="storyCard">
            {
                StoriesData.map((item) => {
                    return (

                        <Card
                            key={item.id}
                            cardData={item.cardDate}
                            cardHeading={item.cardHeading}
                            cardText={item.cardText}
                            img={item.url}
                        />

                    )
                })
            }
        </div>
    )
}

export default StoriesCard