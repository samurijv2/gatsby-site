import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { blogDate, blogLink } from '../components/layout.module.css'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul style={{listStyle:"none"}}>
      {
        data.allMarkdownRemark.nodes.map(node => (
          <li key={node.frontmatter.title} style={{marginBottom:"0.2rem"}}>
            <a className={blogLink} href={node.frontmatter.path}>{node.frontmatter.title}</a><span className={blogDate}>{node.frontmatter.date}</span>
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      nodes {
        frontmatter {
          path
          title
          date(formatString: "MM-DD-YYYY")
        }
      }
    }
  }
  
`

export default BlogPage