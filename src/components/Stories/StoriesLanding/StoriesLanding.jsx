import React from 'react'
import ButtonComponent from '../../common/Button/ButtonComponent'
import './StoriesLanding.css'
import { assets } from '../../../assets/assets'
const StoriesLanding = () => {
  return (
    <div className='StoriesContainer'>
      <img src={assets.pngAssets.storyImg} alt="" className='storiesImg'/>
        <div className='StoryContent'>
        <p className='StoriesContent'>LAST MONTH’S FEATURED STORY</p>
        <h1 className='StoriesHeading'>HAZY FULL MOON OF APPALACHIA</h1>
        <p className='flex'><span className='StoriesText'>March 2nd 2020 </span> <span className='StoriesContent'>by John Appleseed</span></p>
        <p className='StoriesText'>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
        <ButtonComponent text={'READ THE STORY'} textColor={true}/>
        </div>
    </div>
  )
}

export default StoriesLanding