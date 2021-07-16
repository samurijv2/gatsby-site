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
    seo {
      seo_title
      meta_description
    }
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
        title={props.data.sanityPost.seo.seo_title}
        description={props.data.sanityPost.seo.meta_description}
      />
      <h1>{props.data.sanityPost.title}</h1>
      <PortableText
        blocks={props.data.sanityPost._rawBody}
      />
    </Layout>
  )
}

export default Blog