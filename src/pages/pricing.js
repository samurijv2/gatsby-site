import * as React from 'react'
import Layout from '../components/layout'
import { SEO } from '../components/SEO'
import { Link } from 'gatsby'
import { 
        h2,
        pricingContainer,
        pricingContainer2,
        pricingColumn,
        valueCallout,
        priceTierName,
        price,
        perMonth,
        plusAdSpend,
        featuresList,
        feature,
        valueCalloutWithNoValue,
        minimumAdSpend,
        whyMinimum,
} from '../components/pricing.module.css'

const PricingPage = () => {
  return (
    <Layout pageTitle="💵 Pricing">
       <SEO
       title="Pricing - Sam Waymire" 
       description="This is what it costs to work with me."
      />
      <p style={{marginBottom:"0px", fontFamily: "Arial, Helvetica, sans-serif"}}><strong>Jump to:</strong></p>
      <ul style={{marginTop:"0px", fontFamily: "Arial, Helvetica, sans-serif"}}>
        <li><a href="#PPC-prices">PPC &amp; SEM Pricing</a></li>
        <li><a href="#SEO-prices">SEO &amp; Content Marketing Pricing</a></li>
      </ul>
      <h2 style={{marginBottom:"0px"}}><a id="PPC-prices">PPC &amp; SEM</a></h2>
      <p style={{marginTop:"0px"}}>Under each PPC &amp; SEM plan, you're only committed to paying the monthly management fee (with the exception of pilot campaigns). New campaigns and channels are separate line items to be purchased as needed. This model ensures you'll never overpay for a service you don't need. While you may pay more upfront, you'll see greater savings in the long run as your campaigns mature. See here for more on how this approach compares to <Link to="/">other agency pricing models.</Link></p>
      <h3>What's included in the management fee?</h3>
      <p>The management fee covers everything needed to maintain your campaigns over time. All campaigns are optimized through A/B testing, ad rotation, bid adjustments, ad scheduling, negative keywords and more. I scour the ad landscape for risks and opportunities so you don't have to. My goal is to turn every campaign into a stream of leads that holds steady even in the face of significant changes. The fee also includes weekly reporting and friendly support via email or phone.</p>
        <div className={minimumAdSpend}>
        <p><strong>I require a $500 per month minimum ad spend for all PPC &amp; SEM plans. For certain industries, a minimum spend of $1,000 per month is recommended.</strong><span><Link className={whyMinimum} to= "/FAQs#minimum-ad-spend">Why is there a minimum?</Link></span></p>
        </div>
        <div className={pricingContainer}>
        <div className={pricingColumn}>
          <p className={valueCallout}>Best for newcomers</p>
          <p className={priceTierName}><strong>Pilot campaign</strong></p>
          <p className={price}><strong>$459*</strong><span className={perMonth}> (flat fee)</span></p>
          <p className={plusAdSpend}>*Plus ad spend</p>
          <ul className={featuresList}>
            <li className={feature}>2-month commitment</li>
            <li className={feature}>Includes one campaign &amp; landing page</li>
            <li className={feature}>Ads run on single channel</li>
            <li className={feature}>Minimal optimization</li>
            <li className={feature}>No A/B testing conducted</li>
            <li className={feature}>Weekly reporting</li>
            <li className={feature}>Email support only</li>
          </ul>
        </div>
        <div className={pricingColumn}>
          <p className={valueCallout}>Good deal (9% off)</p>
          <p className={priceTierName}><strong>Standard (6 mo.)</strong></p>
          <p className={price}><strong>$339*</strong><span className={perMonth}> / month</span></p>
          <p className={plusAdSpend}>*Plus ad spend</p>
          <ul className={featuresList}>
            <li className={feature}>6-month commitment</li>
            <li className={feature}><strong>$499</strong> per new campaign</li>
            <li className={feature}><strong>$279</strong> to deploy existing campaign to new channel</li>
            <li className={feature}>Continuous optimization</li>
            <li className={feature}>Comprehensive A/B testing</li>
            <li className={feature}>Weekly reporting</li>
            <li className={feature}>Email and phone support</li>
          </ul>
        </div>
        <div className={pricingColumn}>
          <p className={valueCalloutWithNoValue}>-</p>
          <p className={priceTierName}><strong>Standard (3 mo.)</strong></p>
          <p className={price}><strong>$369*</strong><span className={perMonth}> / month</span></p>
          <p className={plusAdSpend}>*Plus ad spend</p>
          <ul className={featuresList}>
            <li className={feature}>3-month commitment</li>
            <li className={feature}><strong>$539</strong> per new campaign</li>
            <li className={feature}><strong>$309</strong> to deploy existing campaign to new channel</li>
            <li className={feature}>Continuous optimization</li>
            <li className={feature}>Comprehensive A/B testing</li>
            <li className={feature}>Weekly reporting</li>
            <li className={feature}>Email and phone support</li>
          </ul>
        </div>
      </div>
      <h3>What's a pilot campaign?</h3>
      <p>A pilot campaign is a test run. It's the simplest possible campaign we can run to learn whether paid ads will work for your business. It's an affordable way to test the waters without committing to anything long-term. Once the campaign ends, you'll know what it costs to acquire a lead, how likely your leads are to convert, and more. <Link to="/">See here</Link> for full details.</p>
      <h3>What's a new campaign?</h3>
      <p>A "new campaign" contains everything you need to advertise a product or service for which you haven't previously ran ads. New campaigns include keyword research, audience definition, ad creative, and landing page design. If you want to advertise something that doesn't already have these assets, you'll need a new campaign to do it.</p>
      <h3>What does it mean to deploy an existing campaign to a new channel?</h3>
      <p>This is when you take an ad campaign that’s already running on one channel and adapt it to run on another channel. E.G., using an existing Google campaign as the basis to build Facebook ads for the same product or service.</p>
      <p style={{lineHeight:"100%"}}><br></br></p>
      <hr></hr>
      <p style={{lineHeight:"100%"}}><br></br></p>
      <h2 style={{marginBottom:"0px"}}><a id="SEO-prices">SEO &amp; Content Marketing</a></h2>
      <p style={{marginTop:"0px"}}>I offer various SEO and content marketing services through a project-based pricing model. What "project" means to you will depend on where you fall in the <Link to="/">SEO Maturity Model.</Link> Example projects include claiming your listings, writing blog posts, identifying backlink opportunities, etc. Projects vary in scope or size, but they share a common goal of driving a measurable increase in your search rankings. All plans include a site audit &amp; strategy development, weekly progress reporting, and support via email and phone.</p>
      <p style={{lineHeight:"50%"}}><br></br></p>
      <p><strong>Lite Tier: </strong>one project at a time; 2-4 week project turnaround time.</p>
      <div className={pricingContainer2}>
      <div className={pricingColumn}>
          <p className={valueCallout}>Good deal (17% savings)</p>
          <p className={priceTierName}><strong>6-month commitment</strong></p>
          <p className={price}><strong>$639</strong><span className={perMonth}> / month</span></p>
          <p className={plusAdSpend}>Total cost of $3,834</p>
        </div>
        <div className={pricingColumn}>
          <p className={valueCalloutWithNoValue}>-</p>
          <p className={priceTierName}><strong>3-month commitment</strong></p>
          <p className={price}><strong>$749</strong><span className={perMonth}> / month</span></p>
          <p className={plusAdSpend}>Total cost of $2,247</p>
        </div>
        </div>
        <p><strong>A good fit for: </strong>businesses that are farther along in their SEO/content marketing journeys. Companies who can afford to wait a little longer before they see a large increase in organic traffic.</p>
        <p style={{lineHeight:"50%"}}><br></br></p>
        <p><strong>Plus Tier: </strong>two projects at a time; 1-3 week project turnaround time.</p>
      <div className={pricingContainer2}>
      <div className={pricingColumn}>
          <p className={valueCallout}>Good deal (14% savings)</p>
          <p className={priceTierName}><strong>6-month commitment</strong></p>
          <p className={price}><strong>$1,079</strong><span className={perMonth}> / month</span></p>
          <p className={plusAdSpend}>Total cost of $6,474</p>
        </div>
        <div className={pricingColumn}>
          <p className={valueCalloutWithNoValue}>-</p>
          <p className={priceTierName}><strong>3-month commitment</strong></p>
          <p className={price}><strong>$1,229</strong><span className={perMonth}> / month</span></p>
          <p className={plusAdSpend}>Total cost of $3,687</p>
        </div>
        </div>
        <p><strong>A good fit for:</strong> companies with websites that lack in content and/or domain authority. Large or outdated websites with numerous SEO problems. Businesses looking to drive up their organic search rankings as fast as possible.</p>
        <p style={{lineHeight:"100%"}}><br></br></p>
    </Layout>
  )
}

export default PricingPage