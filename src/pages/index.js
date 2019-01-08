import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
// import TransitionLink from 'gatsby-plugin-transition-link'
import Helmet from 'react-helmet'

// import QuadDoors from '../components/QuadDoors'
import Layout from '../components/Layout'
import Marquee from '../components/Marquee'
import ListItem from '../components/ListItem'

class Index extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  }

  render() {
    const {
      data,
      data: {
        contentfulFrontPage: { listItems },
      },
      location,
    } = this.props
    const siteDescription = data.site.siteMetadata.description

    return (
      <Layout location={location} title="Reuben Reyes">
        <Helmet
          htmlAttributes={{ lang: `en` }}
          meta={[{ name: `description`, content: siteDescription }]}
          title="REUBEN REYES"
        />
        <div className="frontpage-grid">
          <Marquee>Reuben Reyes</Marquee>
          <ul className="frontpage-grid--menu">
            {listItems.map(
              ({
                bulletStyle,
                content,
                frontpageLinkRoute,
                frontpageLinkText,
              }) => (
                <ListItem frontpage itemStyle={bulletStyle}>
                  {content}
                  {` `}
                  <Link to={frontpageLinkRoute}>{frontpageLinkText}</Link>
                </ListItem>
              ),
            )}
          </ul>
          <p style={{ marginLeft: `.6rem` }}>
            this website is also my
            {` `}
            <Link to="/">[blog]</Link>
          </p>
        </div>
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
    contentfulFrontPage(id: { eq: "eb0dfa23-378b-509c-bb20-fe18834669a9" }) {
      listItems {
        bulletStyle
        content
        frontpageLinkRoute
        frontpageLinkText
      }
    }
  }
`
