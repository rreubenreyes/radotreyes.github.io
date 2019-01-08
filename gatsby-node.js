const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve(`./src/templates/blog-post.js`)
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost(sort: { fields: [date], order: DESC }) {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create blog posts pages.
        const {
          data: {
            allContentfulBlogPost: { edges: posts },
          },
        } = result

        posts.forEach(({ node: { slug } }, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            path: `/blog/${slug}/`,
            component: blogPost,
            context: {
              slug,
              previous,
              next,
            },
          })
        })
      }),
    )
  })
}
