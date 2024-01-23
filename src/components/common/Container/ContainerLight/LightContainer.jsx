import React from 'react'
import './LightContainer.css'
import LightContainerData from './LightContainerData'
import ButtonComponent from '../../Button/ButtonComponent'
const LightContainer = () => {
    return (
        <div>{LightContainerData.map((item) => {
            return (
                <div key={item.id}>
                    <div className={item.container ? 'lightContainerReverse' : 'lightContainer'}>
                        <img src={item.url} alt="" className='lightContainerImg' />
                        <div className='lightContainerInformation'>
                            <div className='LightContainerText'>
                                <h2 className='LightContainerTextHeading'>{item.heading}</h2>
                                <p className='LightContainerTextPara'>{item.para}</p>
                                <ButtonComponent text={item.text} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        }</div>
    )
}

export default LightContainer