import * as React from 'react'
import Layout from '../components/layout'
import { SEO } from '../components/SEO'

const PricingPage = () => {
  return (
    <Layout pageTitle="Pricing">
       <SEO
       title="Pricing - Sam Waymire" 
       description="This is what it costs to work with me."
      />
      <p>These are the prices for my services.</p>
    </Layout>
  )
}

export default PricingPage