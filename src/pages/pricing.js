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
      <p style={{marginTop:"0px"}}>The base price for each of my digital ad packages covers the management of your existing campaigns. It doesn't include the cost of building a new campaign or deploying an existing one to a new channel. I treat these services as separate line items for you to add on as needed. This model ensures you'll never overpay for a service you don't need.</p>
      <p> When we launch a campaign for a new service or adapt an existing campaign to run on a new channel, you'll pay a bit more. When we optimize your existing ads without adding anything new, you pay much less. Most small businesses tend to sell only a handful of things that require their own ad campaigns. If that sounds like you, this approach will end up saving you lots of money over time.</p>
      <h3>What's included in the management fee?</h3>
      <p>The management fee covers everything needed to maintain your campaigns over time. All campaigns are optimized through A/B testing, ad rotation, bid adjustments, ad scheduling, negative keywords and more. I scour the ad landscape for risks and opportunities so you don't have to. My goal is to turn every campaign into a stream of leads that holds steady even in the face of significant changes. See below for full details on what each plan includes:</p>
        <div className={pricingContainer}>
        <div className={pricingColumn}>
          <p className={valueCallout}>Best for newcomers</p>
          <p className={priceTierName}><strong>Pilot campaign</strong></p>
          <p className={price}><strong>$449*</strong><span className={perMonth}> (flat fee)</span></p>
          <p className={plusAdSpend}>*Plus ad spend</p>
          <ul className={featuresList}>
            <li className={feature}>2-month duration</li>
            <li className={feature}>Includes one campaign &amp; landing page</li>
            <li className={feature}>Ads run on single channel</li>
            <li className={feature}>Minimal optimization</li>
            <li className={feature}>No A/B testing conducted</li>
            <li className={feature}>Check-in at halfway point</li>
            <li className={feature}>Weekly reporting (our branding)</li>
            <li className={feature}>Basic approvals for accuracy</li>
            <li className={feature}>Email support</li>
          </ul>
        </div>

        <div className={pricingColumn}>
          <p className={valueCalloutWithNoValue}>-</p>
          <p className={priceTierName}><strong>Lite</strong></p>
          <p className={price}><strong>$349*</strong><span className={perMonth}> / month</span></p>
          <p className={plusAdSpend}>*Plus ad spend</p>
          <ul className={featuresList}>
            <li className={feature}>Ongoing</li>
            <li className={feature}><strong>$519</strong> per new campaign <a style={{textDecoration:"none"}} href="#new-campaign">❓</a></li>
            <li className={feature}><strong>$289</strong> to deploy existing campaign to new channel <a style={{textDecoration:"none"}} href="#new-channel">❓</a></li>
            <li className={feature}>Continuous optimization</li>
            <li className={feature}>Comprehensive A/B testing</li>
            <li className={feature}>Bi-weekly check-ins</li>
            <li className={feature}>Weekly reporting (our branding)</li>
            <li className={feature}>Basic approvals for accuracy</li>
            <li className={feature}>Email &amp; phone support</li>
          </ul>
        </div>
        <div className={pricingColumn}>
          <p className={valueCalloutWithNoValue}>-</p>
          <p className={priceTierName}><strong>Plus</strong></p>
          <p className={price}><strong>$599*</strong><span className={perMonth}> / month</span></p>
          <p className={plusAdSpend}>*Plus ad spend</p>
          <ul className={featuresList}>
            <li className={feature}>Ongoing</li>
            <li className={feature}><strong>$629</strong> per new campaign <a style={{textDecoration:"none"}} href="#new-campaign">❓</a></li>
            <li className={feature}><strong>$379</strong> to deploy existing campaign to new channel <a style={{textDecoration:"none"}} href="#new-channel">❓</a></li>
            <li className={feature}>Continuous optimization</li>
            <li className={feature}>Comprehensive A/B testing</li>
            <li className={feature}>Bi-weekly check-ins</li>
            <li className={feature}>Weekly reporting (your branding)</li>
            <li className={feature}>Full content approvals</li>
            <li className={feature}>Email &amp; phone support</li>
            <li className={feature}>Unlimited conversations via Slack (business hours only)</li>
            <li className={feature}>Custom live dashboard</li>
          </ul>
        </div>
      </div>
      <h3>What's a pilot campaign?</h3>
      <p>A pilot campaign is a test run. It's the simplest possible campaign we can run to learn whether paid ads will work for your business. It's an affordable way to test the waters without committing to anything long-term. Once the campaign ends, you'll know what it costs to acquire a lead, how likely your leads are to convert, and more. <Link to="/blog/pilot-campaign">See here</Link> for full details.</p>
      <h3><a id="new-campaign">What's a new campaign?</a></h3>
      <p>A "new campaign" contains everything you need to advertise a product or service for which you haven't previously ran ads. New campaigns include keyword research, audience definition, ad creative, and landing page design. If you want to advertise something that doesn't already have these assets, you'll need a new campaign to do it.</p>
      <h3><a id="new-channel">What does it mean to deploy an existing campaign to a new channel?</a></h3>
      <p>This is when you take an ad campaign that’s already running on one channel and adapt it to run on another channel. E.G., using an existing Google campaign as the basis to build Facebook ads for the same product or service.</p>
      <p style={{lineHeight:"100%"}}><br></br></p>
      <hr></hr>
      <p style={{lineHeight:"100%"}}><br></br></p>
      <h2 style={{marginBottom:"0px"}}><a id="SEO-prices">SEO &amp; Content Marketing</a></h2>
      <p style={{marginTop:"0px"}}>I offer various SEO and content marketing services through a project-based pricing model. What "project" means to you is something we'll agree upon together. It will depend on where you're at in your SEO journey. Example projects include claiming your listings, writing blog posts, identifying backlink opportunities, etc. Projects vary in scope or size, but they share a common goal of driving a measurable increase in your search rankings.</p>
      <div className={pricingContainer}>
      <div className={pricingColumn}>
          <p className={valueCalloutWithNoValue}>-</p>
          <p className={priceTierName}><strong>Site Audit</strong></p>
          <p className={price}><strong>$249</strong><span className={perMonth}> (flat fee)</span></p>
          <ul className={featuresList}>
            <li className={feature}><strong>One week </strong> turnaround time</li>
            <li className={feature}>Identifies current Google ranks</li>
            <li className={feature}>Measures site performance</li>
            <li className={feature}>Checks site structure for crawlability</li>
            <li className={feature}>Reviews keyword optimization</li>
            <li className={feature}>Identifies backlink opportunities</li>
            <li className={feature}>Includes prioritized list of reccomendations</li> 
            <li className={feature}>Full report is yours to keep. Implement the findings yourself or hire me (or anybody else) to do it for you. </li>
          </ul>
        </div>
      <div className={pricingColumn}>
          <p className={valueCalloutWithNoValue}>-</p>
          <p className={priceTierName}><strong>Lite</strong></p>
          <p className={price}><strong>$649</strong><span className={perMonth}> / month</span></p>
          <ul className={featuresList}>
            <li className={feature}><strong>One project</strong> at a time</li>
            <li className={feature}><strong>2-4 week </strong> project turnaround time</li>
            <li className={feature}>Site audit &amp; strategy development</li>
            <li className={feature}>Bi-weekly check-ins</li>
            <li className={feature}>Weekly reporting (our branding)</li>
            <li className={feature}>Full content approvals</li>
            <li className={feature}>Email &amp; phone support</li>
          </ul>
        </div>
        <div className={pricingColumn}>
          <p className={valueCallout}>Best for fast growth</p>
          <p className={priceTierName}><strong>Lite</strong></p>
          <p className={price}><strong>$1,099</strong><span className={perMonth}> / month</span></p>
          <ul className={featuresList}>
            <li className={feature}><strong>Two projects</strong> at a time</li>
            <li className={feature}><strong>1-3 week </strong> project turnaround time</li>
            <li className={feature}>Site audit &amp; strategy development</li>
            <li className={feature}>Bi-weekly check-ins</li>
            <li className={feature}>Weekly reporting (your branding)</li>
            <li className={feature}>Full content approvals</li>
            <li className={feature}>Email &amp; phone support</li>
            <li className={feature}>Unlimited conversations via Slack (business hours only)</li>
          </ul>
        </div>
        </div>
        <p style={{lineHeight:"100%"}}><br></br></p>
    </Layout>
  )
}

export default PricingPage