import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'

class BlogPostTemplate extends Component {
  static propTypes = {
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          title: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      contentfulBlogPost: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        content: PropTypes.shape({
          internal: PropTypes.shape({
            content: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
        excerpt: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
  }

  render() {
    // const post = this.props.data.markdownRemark
    // const siteTitle = this.props.data.site.siteMetadata.title
    // const siteDescription = post.excerpt
    // const { previous, next } = this.props.pageContext
    const {
      data: {
        site: {
          siteMetadata: { title: siteTitle },
        },
        contentfulBlogPost: {
          title: postTitle,
          date: postDate,
          content: {
            internal: { content: postContent },
          },
          excerpt: postExcerpt,
        },
      },
    } = this.props
    const { location } = this.props

    return (
      <Layout location={location} title={siteTitle}>
        {/* <Helmet
          htmlAttributes={{ lang: `en` }}
          meta={[{ name: `description`, content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        /> */}
        <h1>{postTitle}</h1>
        <p>{postDate}</p>
        {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
        <div>{postContent}</div>
        {/* previous/next posts follow */}
        {/* <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ←
                {` `}
                {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
                {` `}
→
              </Link>
            )}
          </li>
        </ul> */}
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      date(formatString: "YYYY MM DD")
      excerpt
      content {
        internal {
          content
        }
      }
    }
  }
`
