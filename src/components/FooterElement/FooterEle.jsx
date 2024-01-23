import React from 'react'
import ButtonComponent from '../common/Button/ButtonComponent'
import './FooterEle.css'
const FooterEle = () => {
  return (
    <div className='FooterEle'>
        <div className='footerGradient'>

        </div>
        <div className='footerImg'>
            <div className='containerTextHeading footerHeading'>We’re in beta. Get your invite today!</div>
            <ButtonComponent text={'GET AN INVITE'} textColor={true}/>
        </div>
    </div>
  )
}

export default FooterEle