import * as React from 'react'
import { Link } from 'gatsby' 
import { navLinkText, repeatingCounterRule, standardBulletedList } from '../components/layout.module.css'
import Layout from '../components/layout'
import { SEO } from '../components/SEO'

const IndexPage = () => {
  return (
    <Layout pageTitle="👨‍💻 Hi, I'm Sam.">
       <SEO
       title="Digital marketing agency for small businesses | Waymire Analytics" 
       description="Waymire Analytics is a local business marketing agency in Frederick MD. We offer affordable digital marketing services for small business."
      />
      <h2 style={{fontSize:"1.3em"}}>I help local businesses attract more customers online.</h2>
      <p>If you've arrived at this site, you’re probably assessing whether digital marketing can help you achieve your business goals. You may be new to marketing your business online, or perhaps you had a bad experience with it in the past.</p> 
      <p>It’s valid to question whether digital marketing will even work at all. "How can I be sure that running Facebook ads or improving my Google rank will increase sales?" You might be wondering. These are important questions, and satisfying answers are elusive.</p> 
      <p><strong>Here are a few links to help you make an informed decision for your business: </strong></p>
      <ul className={repeatingCounterRule}>
        <li className={standardBulletedList}>Curious whether digital marketing will actually work for your business? <Link to="/blog/pilot-campaign" className={navLinkText}>Pilot campaigns</Link> are low cost, low-commitment projects that help you know for sure whether digital ads are worth it for you. </li>
        <li className={standardBulletedList}>Want to improve your search engine rankings but not sure where to start? Learn how my <Link to="/blog/seo-audit" className={navLinkText}>SEO audit</Link> can provide a personalized step-by-step plan to get your site to the first page of Google.</li>
      </ul>
      <h3>Can I help?</h3>
      <p>As a lead gen specialist, my services may be a good fit for you if:</p>
      <ol>
        <li>You're a small business.</li>
        <li>You're a local service provider (e.g. a dentist, realtor, lawyer, roofer, plumber, etc.).</li>
        <li>Your new customers usually make first contact online or by phone. In other words, you don’t get many walk-ins.</li>
      </ol>
      <p><strong>If you have a digital marketing project you’d like my help with, please <Link to="/contact" className={navLinkText}>get in touch.</Link></strong></p>
    </Layout>
  )
}

export default IndexPage