import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import { SEO } from '../components/SEO'
import PortableText from '@sanity/block-content-to-react'


export const query = graphql`
query MyQuery($slug: String!) {
  sanityPost(slug: {current: {eq: $slug}}) {
    title
    publishedAt(formatString: "MM-DD-YYYY")
    id
    slug {
      current
    }
    _rawBody
  }
}  
`

const Blog = props => {
  return (

    <Layout>
       <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
        />
      <SEO
        title={props.data.sanityPost.title}
        description="I still need to add an excerpt field"
      />
      <h1>{props.data.sanityPost.title}</h1>
      <PortableText
        blocks={props.data.sanityPost._rawBody}
      />
    </Layout>
  )
}

export default Blog