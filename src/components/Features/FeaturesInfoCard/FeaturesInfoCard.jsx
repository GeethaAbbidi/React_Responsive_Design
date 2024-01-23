import React from 'react'
import FeaturesData from './FeaturesData'
import InfoCard from '../../common/InfoCard/InfoCard'
import HomeInfo from '../../common/InfoCard/HomeInfoCard/HomeInfo'
import '../../common/InfoCard/HomeInfoCard/HomeInfo.css'
const FeaturesInfoCard = () => {
    return (
        <div className='HomeInfoBorder'>
            <div className='homeInfoCard'>{
                FeaturesData.map((item, index) => {
                    return (
                        <InfoCard
                            key={index}
                            maintext={item.mainText}
                            subtext={item.subText}
                            src={item.src}
                        />
                    )
                })

            }
            </div>
        </div>
    )
}

export default FeaturesInfoCard