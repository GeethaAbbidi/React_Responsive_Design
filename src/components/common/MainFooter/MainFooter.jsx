import React from 'react'
import { assets } from '../../../assets/assets'
import './MainFooter.css'
import ButtonComponent from '../Button/ButtonComponent'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
// import CustomLink from '../Header/NavBar/NavBar/CustomLink'
const MainFooter = () => {
    return (


        <div className='footer'>
            <div className='leftFooter'>
                <div className='fotterLogos'>
                    <img src={assets.pngAssets.footerLogo} alt="" />
                    <img src={assets.pngAssets.footerLogos} alt="" />
                </div>
                {/* <div > */}
                    <ul className='footerList'>
                        <CustomLink to="/" className='footerListElements'>HOME</CustomLink>
                        <CustomLink to="/Stories" className='footerListElements'>STORIES</CustomLink>
                        <CustomLink to="/Features" className='footerListElements'>FEATURES</CustomLink>
                        <CustomLink to="/Pricing" className='footerListElements'>PRICING</CustomLink>
                    </ul>
                {/* </div> */}
            </div>

            <div className='rightFooter' >
                <ButtonComponent text={'GET AN INVITE'} textColor={true} />
                <p className='footerPara'>Copyright 2019. All Rights Reserved</p>
            </div>
        </div>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to) //Resolves the pathname of the given -to- value against the pathname of the current location and returns a Path object
    const isActive = useMatch({ path: resolvedPath.pathname, end: true }) //useMatch-returns the current route matches on the page,useful for creating layout abstractions with current routes
    return (
        <li className={isActive && "active"}>
            <Link to={to} {...props}> {children} </Link>
        </li>
    )
}


export default MainFooter