import * as React from 'react'
import Layout from '../components/layout'
import { SEO } from '../components/SEO'

const FAQsPage = () => {
  return (
    <Layout pageTitle="Frequently Asked Questions">
       <SEO
       title="Frequently Asked Questions - Sam Waymire" 
       description="I get asked these questions a lot."
      />
      <h3>Why do you require a committment?</h3>
      <p>Like all investments, digital marketing takes time to generate a return. Google can take months to reflect your site's SEO improvements in its search rankings. New ad campaigns can't reach peak performance without hours of upfront work and many rounds of optimization. A minimum term ensures your account has the time it needs to deliver meaningful results.</p>
      <h3>Why's there a minimum ad spend for paid search and social campaigns?</h3>
      <p>Ad campaigns need a wealth of data to perform their best. Every click brings us closer to knowing which ads, keywords, devices, and times of day convert best. It generally takes at least $1000/month to generate the clicks needed to dial in a campaign in a timely fashion.</p>
      <h3>Why owns the campaigns?</h3>
      <p>You do. I build all campaigns within your own ad accounts. If you don't have an account with a specific ad platform, I'll help you set one up. When we go our separate ways, you retain full ownership of the work. </p>
      <h3>Will you bill me for ad spend?</h3>
      <p>No. Each ad platform charges you directly for ad spend via the card associated to your account. I never touch your ad spend.</p>
      <h3>What about landing pages?</h3>
      <p>CI use a leading page-builder tool to deploy performant landing pages to your site. Landing pages are connected to your domain, but they're hosted on third party servers. For this reason, I can't just "hand over" your pages when our relationship ends. Instead, what I can do is keep your pages published for six months after we part ways. This ensures continuity for your ads in the short term and gives you enough time to figure out a migration plan.</p>
    </Layout>
  )
}

export default FAQsPage