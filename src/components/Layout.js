import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,
  }

  render() {
    const { location, title, children } = this.props
    const rootPath = `/blog`
    let header

    if (location.pathname === rootPath || `/`) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to="/"
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to="/"
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        className="layout"
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
