import React from 'react'
import './DarkContainer.css'
import { assets } from '../../../../assets/assets'
import ButtonComponent from '../../Button/ButtonComponent'
const DarkContainer = ({ heading ,para , src ,text ,required,gradient}) => {
    // const required=
    return (
        <div className='darkContainer'>

            <div className='containerInformation'>
                <div className='box'>
                    <div className={gradient ? 'smallGradientContainer':'gradientContainer'}></div>
                    <div className='containerText'>
                        <h2 className='containerTextHeading'>{heading}</h2>
                        <p className='containerTextPara'>{para}</p>
                        {required && <ButtonComponent text={text}  textColor={true} />}
                    </div>
                </div>
            </div>
            <img src={src} alt="" className='darkContainerImg'/>
        </div>
    )
}

export default DarkContainer
