import React from 'react'
import HomeInfoData from './HomeInfoData'
import InfoCard from '../InfoCard'
import './HomeInfo.css'
const HomeInfo = () => {
    return (
        <div className='HomeInfoBorder'>
            <div className='homeInfoCard'>
                {
                    HomeInfoData.map((item) => {
                        return (
                            <InfoCard
                                key={item.id}
                                src={item.src}
                                maintext={item.mainText}
                                subtext={item.subText}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomeInfo