import * as React from 'react'
import { Helmet } from "react-helmet"
import { Link, useStaticQuery, graphql } from 'gatsby'
import { SEO } from './SEO'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkItemActive,
  navLinkText,
  siteTitle,
  content,
  media, 
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  footerLinks
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
  
    return (
     <main>
       <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
        />
        <SEO />
        <div className={container}>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <div>
          <p className={siteTitle}>{data.site.siteMetadata.title}</p>
          <nav>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                <Link to="/" className={navLinkItem} activeClassName={navLinkItemActive}>
                  Home
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/services" className={navLinkItem} activeClassName={navLinkItemActive}>
                  Services
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/pricing" className={navLinkItem} activeClassName={navLinkItemActive}>
                  Pricing
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/FAQs" className={navLinkItem} activeClassName={navLinkItemActive}>
                  FAQs
                </Link>
              </li>  
              <li className={navLinkItem}>
                <Link to="/blog" className={navLinkItem} activeClassName={navLinkItemActive}>
                  Blog
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/contact" className={navLinkItem} activeClassName={navLinkItemActive}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={content}>
          <hr></hr>
          <h1>{pageTitle}</h1>
          {children}
          <footer>
            <hr></hr>
            © {new Date().getFullYear()} Waymire Analytics LLC, Built with {` `} <a href="https://www.gatsbyjs.com">Gatsby</a><span className={footerLinks}><Link to="/privacy">Privacy Policy</Link>{' | '}<Link to="/terms">Terms of Service</Link></span>
          </footer>
        </div>
        </div>
      </main>  
    )
  }
  
  export default Layout