import * as React from 'react'
import Layout from '../components/layout'
import { SEO } from '../components/SEO'
import { graphql, Link } from 'gatsby'
import { blogDate, blogLink, blogPostList } from '../components/layout.module.css'

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

const BlogPage = ({data}) => {    
  return (  
    <Layout pageTitle="✍️ Blog">
       <SEO
       title="Blog - Sam Waymire" 
       description="Welcome to my blog"
      />
            <ul className={blogPostList}>
          {data.allSanityPost.edges.map(posts => (
            <li key={posts.node.title} style={{marginBottom:"0.3rem"}}>
            <Link className={blogLink} to={posts.node.slug.current}>{posts.node.title}</Link><span className={blogDate}>{posts.node.publishedAt}</span>    
            </li>
          ))
          }    
      </ul>

    </Layout>
  )
} 

export default BlogPage