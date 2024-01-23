import React from 'react'
// import Component from '../../common/Container/Component'
import DarkContainerData from './DarkContainerData'
import DarkContainer from '../../common/Container/DarkContainer/DarkContainer'

const FeatureContainer = () => {
    return (
        <div className='featuresInfoCard'>
            {DarkContainerData.map((item, index) => {
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
    )
}

export default FeatureContainer