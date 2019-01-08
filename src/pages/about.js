import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
// import TransitionLink from 'gatsby-plugin-transition-link'
import Helmet from 'react-helmet'

// import QuadDoors from '../components/QuadDoors'
import Layout from '../components/Layout'
import ListItem from '../components/ListItem'
import Marquee from '../components/Marquee'

class About extends Component {
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
          <Marquee>About</Marquee>
          <section className="about">
            <h2>hi, i'm reuben</h2>
            <p>
              software engineer at Human API, San Jose State University
              graduate, freelance web developer
            </p>
            <h2>what i do</h2>
            <ul>
              <ListItem>try out weird ux designs</ListItem>
              <ListItem>
                co-organize a meetup group in northern california
              </ListItem>
              <ListItem>
                pick apart web frameworks in the quest to build my own
              </ListItem>
              <ListItem>contribute to open source</ListItem>
            </ul>
            <h2>what's going on right now</h2>
            <ul>
              <ListItem>
                writing only typescript in 2019 (except this portfolio, oops)
              </ListItem>
              <ListItem>studying low-level computer architecture</ListItem>
              <ListItem>working on a crafting game</ListItem>
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

export default About

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
