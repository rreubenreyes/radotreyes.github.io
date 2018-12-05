import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import TransitionLink from 'gatsby-plugin-transition-link'
import Helmet from 'react-helmet'

import QuadDoors from '../components/QuadDoors'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'

import '../styles/style.scss'

class Index extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  }

  state = {
    windowIsLandscape: false,
  }

  componentDidMount = () => {
    window.addEventListener(`resize`, this.handleResize)
    this.handleResize()
  }

  componentWillUnmount = () => {
    window.removeEventListener(`resize`, this.handleResize)
  }

  handleResize = () => {
    this.setState({
      windowIsLandscape: window.matchMedia(`(orientation: landscape)`).matches,
    })
  }

  render() {
    const { data, location } = this.props
    const siteDescription = data.site.siteMetadata.description
    const { windowIsLandscape } = this.state

    return (
      <Layout location={location} title="Reuben Reyes">
        <Helmet
          htmlAttributes={{ lang: `en` }}
          meta={[{ name: `description`, content: siteDescription }]}
          title="REUBEN REYES"
        />
        <h3>this is my website</h3>
        <TransitionLink
          to="/blog"
          exit={{
            trigger: ({ node }) => {
              /* eslint-disable no-param-reassign */
              node.style.backgroundColor = `blue`
            },
            delay: 0,
            length: 100,
            zIndex: 0,
          }}
          entry={{
            trigger: ({ entry, exit, node }) => {
              console.log(entry, exit, node)
            },
            delay: 0,
            length: 100,
            zIndex: 1,
          }}
        >
          blog
        </TransitionLink>
        {windowIsLandscape && (
          <QuadDoors
            menuItems={{
              first: `home`,
              second: `projects`,
              third: `about`,
              fourth: `blog`,
            }}
          />
        )}
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
