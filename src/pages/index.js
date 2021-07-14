import * as React from 'react'
import { Link } from 'gatsby' 
import { navLinkText, repeatingCounterRule, standardBulletedList } from '../components/layout.module.css'
import Layout from '../components/layout'
import { SEO } from '../components/SEO'

const IndexPage = () => {
  return (
    <Layout pageTitle="👨‍💻 Hi, I'm Sam.">
       <SEO
       title="Homepage - Sam Waymire" 
       description="You found my beautiful website!"
      />
      <h2>I help local businesses attract more customers online.</h2>
      <p>If you've arrived at this site, you’re probably assessing whether digital marketing can help you achieve your business goals. You may be new to marketing your business online, or perhaps you had a bad experience with it in the past.</p> 
      <p>It’s valid to question whether digital marketing will even work at all. "How can I be sure that running Facebook ads or improving my Google rank will increase sales?" You might be wondering. These are important questions, and satisfying answers are elusive.</p> 
      <p><strong>Here are a few links to help you make an informed decision for your business: </strong></p>
      <ul className={repeatingCounterRule}>
        <li className={standardBulletedList}>Curious whether digital marketing will actually work for your business? <Link to="/" className={navLinkText}>Pilot campaigns</Link> are low cost, low-commitment projects that help you know for sure whether digital ads are worth it for you. </li>
        <li className={standardBulletedList}>Wondering what's <Link to="/" className={navLinkText}>the least you can spend on digital ads</Link> and still see results? There's a simple formula to find out. </li>
        <li className={standardBulletedList}>Want to know the <Link to="/" className={navLinkText}>only performance indicator you should care about</Link> when it comes to your digital ads? Hint: it has nothing to do with clicks, impressions, sessions, or pageviews. </li>
        <li className={standardBulletedList}>Not sure where your marketing dollars will have the greatest impact? Find your ideal starting point with the <Link to="/" className={navLinkText}>Digital Marketing Maturity Model.</Link> </li>
        <li className={standardBulletedList}>Worried that digital marketing is a regular expense you’ll be stuck paying forever? Learn how to <Link to="/" className={navLinkText}>distinguish between recurring costs and one-time expenses</Link> that yield returns far into the future. </li>
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