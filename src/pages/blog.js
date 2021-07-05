import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul style={{listStyle:"none"}}>
      {
        data.allMarkdownRemark.nodes.map(node => (
          <li key={node.frontmatter.title}>
            <p>{node.frontmatter.date}</p>
            <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
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