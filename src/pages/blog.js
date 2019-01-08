import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'

import '../styles/style.scss'

class BlogIndex extends Component {
  static propTypes = {
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      allContentfulBlogPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
  }

  render() {
    const {
      data: {
        site: {
          siteMetadata: { title: siteTitle, description: siteDescription },
        },
        allContentfulBlogPost: { edges: posts },
      },
      location,
    } = this.props

    return (
      <Layout location={location} title={siteTitle}>
        {/* <Helmet
          htmlAttributes={{ lang: `en` }}
          meta={[{ name: `description`, content: siteDescription }]}
          title={siteTitle}
        /> */}
        {posts.map(({
          node: {
            title, slug, date, excerpt,
          },
        }) => (
          <div key={slug}>
            <h3>
              <Link style={{ boxShadow: `none` }} to={slug}>
                {title}
              </Link>
            </h3>
            <small>{date}</small>
            <p dangerouslySetInnerHTML={{ __html: excerpt }} />
          </div>
        ))}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulBlogPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          date(formatString: "YYYY MM DD")
          excerpt
        }
      }
    }
  }
`
