import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  footer
} from './layout.module.css'
import { media } from './style.css'

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
      <main className={container}>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <p className={siteTitle}>{data.site.siteMetadata.title}</p>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/services" className={navLinkText}>
                Services
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/pricing" className={navLinkText}>
                Pricing
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/FAQs" className={navLinkText}>
                FAQs
              </Link>
            </li>  
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                Blog
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/contact" className={navLinkText}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    )
  }
  
  export default Layout