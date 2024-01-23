import React from 'react'
import FooterEle from '../../components/FooterElement/FooterEle'
import PricingCard from '../../components/Pricing/PricingCard/PricingCard'
import Compare from '../../components/Features/Compare/Compare'
import PriceCard from '../../components/Pricing/PlanCard/PriceCard/PriceCard'

function Pricing() {
  return (
    <div>
      <PricingCard />
      <FooterEle />
      <PriceCard />
    </div>
  )
}

export default Pricing