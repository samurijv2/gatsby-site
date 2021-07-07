exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query BlogPostQuery {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
    edges {
      node {
        id
        title
        slug {
          current
        }
        _createdAt
        body {
          children {
            text
          }
        }
      }
    }
  }
}
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allSanityPost.edges || []
  posts.forEach((edge, index) => {
    const path = `${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/blog-post.js"),
      context: { slug: edge.node.slug.current },
    })
  })
}