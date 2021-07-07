import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { blogDate, blogLink } from '../components/layout.module.css'

export const query = graphql`
query BlogPageQuery {
    allSanityPost(sort: {fields: publishedAt, order: DESC}) {
      edges {
        node {
          publishedAt(formatString: "MM-DD-YYYY")
          title
          slug {
            current
          }
        }
      }
    }
  }
`

const BlogPage = ({ data }) => {    
  return (  
    <Layout pageTitle="My Blog Posts">
      <ul style={{listStyle:"none"}}>
          {data.allSanityPost.edges.map(posts => (
            <li key={posts.node.title} style={{marginBottom:"0.3rem"}}>
            <a className={blogLink} href={posts.node.slug.current}>{posts.node.title}</a><span className={blogDate}>{posts.node.publishedAt}</span>    
          </li>
          ))
          }    
      </ul>
    </Layout>
  )
} 

export default BlogPage