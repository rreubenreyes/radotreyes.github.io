import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../assets/logo.svg'

const Marquee = ({ children }) => (
  <h1 className="marquee">
    <Logo />
    {children}
  </h1>
)

Marquee.propTypes = {
  children: PropTypes.object.isRequired,
}
export default Marquee
