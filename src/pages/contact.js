import * as React from 'react'
import Layout from '../components/layout'
import { SEO } from '../components/SEO'

const ContactPage = () => {
  return (
    <Layout pageTitle="📧 Contact">
       <SEO
       title="Contact - Sam Waymire"
       description="This is how to reach me." 
      />
      <p>Email is the best way to reach me. Send inquiries to <a href="mailto:sam@samwaymire.com">sam@samwaymire.com.</a></p> 
      <p>If you message me during work hours (M-F from 9-5 EST), I’ll make every attempt to get back to you within fifteen minutes. I reply to emails received after hours or over the weekend by 10AM the next business day.</p>
    </Layout>
  )
}

export default ContactPage