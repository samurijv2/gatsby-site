import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { SEO } from '../components/SEO'

const PrivacyPage = () => {
  return (
    <Layout pageTitle="Privacy Policy">
       <SEO
       title="Privacy Policy - Sam Waymire"
       description="This is my site's privacy policy." 
      /> 
      <p>I want to process as little personal information as possible when you use my website. That's why I've chosen Fathom Analytics for my website analytics, which doesn't use cookies and complies with the GDPR, ePrivacy (including PECR), COPPA and CCPA. Using this privacy-friendly website analytics software, your IP address is only briefly processed, and I (the person running this website) have no way of identifying you. As per the CCPA, your personal information is de-identified. You can read more about this on <a href="https://usefathom.com/compliance">Fathom Analytics' website.</a></p>
      <p>The purpose of us using this software is to understand this site's traffic in the most privacy-friendly way possible so that I can continually improve my website and business. The lawful basis as per the GDPR is "f); where my legitimate interests are to improve our website and business continually." As per the explanation, no personal data is stored over time.</p>
      <p>If you have any questions about how my site uses your data, please <Link to="/contact">contact me.</Link></p>
    </Layout>
  )
}

export default PrivacyPage