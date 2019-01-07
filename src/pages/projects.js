import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
// import TransitionLink from 'gatsby-plugin-transition-link'
import Helmet from 'react-helmet'

// import QuadDoors from '../components/QuadDoors'
import Layout from '../components/Layout'
import ListItem from '../components/ListItem'
import Marquee from '../components/Marquee'

class Projects extends Component {
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
        <div className="grid">
          <Marquee>Projects</Marquee>
          <section className="skills">
            <h2>fullstack web development</h2>
            <ul>
              <ListItem>javascript (react, es6)</ListItem>
              <ListItem>css (sass, flexbox, grid</ListItem>
              <ListItem>graphql</ListItem>
              <ListItem>node (express)</ListItem>
            </ul>
            <h2>programming</h2>
            <ul>
              <ListItem>python, c, shell</ListItem>
            </ul>
            <h2>graphic design</h2>
            <ul>
              <ListItem>sketch</ListItem>
              <ListItem>adobe photoshop</ListItem>
            </ul>
          </section>
        </div>
        {/* {windowIsLandscape && (
          <QuadDoors
            menuItems={{
              first: `home`,
              second: `projects`,
              third: `about`,
              fourth: `blog`,
            }}
          />
        )} */}
      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
