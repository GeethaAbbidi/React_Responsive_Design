import React from 'react'
import { Link ,useMatch,useResolvedPath  } from 'react-router-dom'
import './NavBar.css';
import { assets } from '../../../../assets/assets'

export default function NavBar() {
    return (
        <>
            <nav className='navBar'>
                <CustomLink to='/'><img src={assets.pngAssets.logo} alt='non' className='logoImg' /></CustomLink>
                <ul className='centerList'>
                    <CustomLink to="/Stories" className='navBarList'>STORIES</CustomLink>
                    <CustomLink to="/Features" className='navBarList'>FEATURES</CustomLink>
                    <CustomLink to="/Pricing" className='navBarList'>PRICING</CustomLink>
                </ul>
                <div className='rightNav'>GET AN INVITE</div>
                <button className='hamburger' type='button'><img src={assets.pngAssets.hamburger} alt="" /></button>
                <button type='button' className='cross'><img src={assets.pngAssets.cross} alt="" /></button>
            </nav>
        </>
    )
}
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to) //Resolves the pathname of the given -to- value against the pathname of the current location and returns a Path object
    const isActive = useMatch({path: resolvedPath.pathname, end:true }) //useMatch-returns the current route matches on the page,useful for creating layout abstractions with current routes
    return (
        <li className={isActive && "active"}>
            <Link to={to} {...props}> {children} </Link>
        </li>
    )
}
