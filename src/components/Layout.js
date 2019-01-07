import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import '../styles/style.scss'
import Sidebar from './Sidebar'

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

    // if (location.pathname === rootPath || `/`) {
    //   header = (
    //     <h1>
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to="/"
    //       >
    //         {title}
    //       </Link>
    //     </h1>
    //   )
    // } else {
    //   header = (
    //     <h3
    //       style={{
    //         fontFamily: `Montserrat, sans-serif`,
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to="/"
    //       >
    //         {title}
    //       </Link>
    //     </h3>
    //   )
    // }
    return (
      <div className="layout">
        {header}
        <Sidebar />
        <main className="main">{children}</main>
      </div>
    )
  }
}

export default Layout
