// MenuBar


import React from "react";
import { assets } from "../../assets/assets";
import React from 'react'

const MenuBar = () => {
    return (
        <>
            <nav className='menuBar'>
                <CustomLink to='/Homepage'><img src={assets.pngAssets.logo} alt='non' className='logoImg' /></CustomLink>
                <ul className='menuList'>
                    <CustomLink to="/Stories" className='menuBarList'>STORIES</CustomLink>
                    <CustomLink to="/Features" className='menuBarList'>FEATURES</CustomLink>
                    <CustomLink to="/Pricing" className='menuBarList'>PRICING</CustomLink>
                </ul>
                <div className='rightMenu'>GET AN INVITE</div>
                {/* <button className='hamburger' type='button'><img src={assets.pngAssets.hamburger} alt="" /></button>
                <button type='button' className='cross'><img src={assets.pngAssets.cross} alt="" /></button> */}

            </nav>

        </>

    )
}

export default MenuBar




// import React, { useState } from 'react';
// import './MenuBar.css';

// const HamburgerMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     // console.log("tap")
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
//       <div className="hamburger-icon" onClick={toggleMenu}>
//         {isOpen ?
//           <img src='/images/cross.svg' />
//           :
//           <img src='/images/ham.svg' />}
//       </div>
//       {isOpen && (
//         <div className="menu-overlay" onClick={closeMenu}>
//           <div className="menu-links" onClick={(e) => e.stopPropagation()}>
//             <a href="/about">About</a>
//             <a href="/Career">Career</a>
//             <a href="/Events">Events</a>
//             <a href="/Products">Products</a>
//             <a href="/Support">Support</a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HamburgerMenu;