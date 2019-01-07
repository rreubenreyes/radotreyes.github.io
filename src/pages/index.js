import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
// import TransitionLink from 'gatsby-plugin-transition-link'
import Helmet from 'react-helmet'

// import QuadDoors from '../components/QuadDoors'
import Layout from '../components/Layout'
import Logo from '../assets/logo.svg'

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
        <div className="frontpage">
          <h1 className="marquee">
            <Logo />
            Reuben Reyes
          </h1>
          <ul className="frontpage--menu">
            <li>
              <div className="list--bullet">>_&nbsp;</div>
              software engineer
              {` `}
              <Link to="/">[go to skills section]</Link>
            </li>
            <li>
              <div className="list--bullet">www</div>
              web developer
              {` `}
              <Link to="/">[go to projects section]</Link>
            </li>
            <li>
              <div className="list--bullet">(?)</div>
              etc.
              {` `}
              <Link to="/">[go to about section]</Link>
            </li>
          </ul>
          <ul>
            <li>
              this website is also my
              {` `}
              <Link to="/">[blog]</Link>
            </li>
          </ul>
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

export default Index

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
