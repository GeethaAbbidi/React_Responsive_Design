import React from 'react'
import HomeContainer from '../../components/common/Container/HomeContainer'
import HomeCardContainer from '../../components/common/HomeCardContainer.jsx/HomeCardContainer'
// import InfoCard from '../../common/InfoCard/InfoCard'
import HomeInfo from '../../components/common/InfoCard/HomeInfoCard/HomeInfo'
import NavBar from '../../components/common/Header/NavBar/NavBar'
import MainFooter from '../../components/common/MainFooter/MainFooter'


export default function HomePage() {
  return (
    <>
      <HomeContainer />
      <HomeCardContainer />
      <HomeInfo />
    </>
  )
}


