// import "./Card.css"
import React from "react"
import { Card } from "../Card/Card"
import CardInfo from "./CardInfo"
import './HomeCard.css'

function HomeCardContainer() {
    return (
        <div className="cardSection">
            {
                CardInfo.map((item) => {
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
export default HomeCardContainer