import React from 'react'
import { Link } from 'gatsby'

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar--nav">
      <Link to="/">
        <h3 style={{ color: `red`, fontSize: `2rem`, fontStyle: `normal` }}>
          ≡
        </h3>
      </Link>
      <Link to="/">
        <h3>home</h3>
      </Link>
      <h3>
        <a className="link--external" href="https://github.com/rreubenreyes">
          github
        </a>
      </h3>
      <h3>
        <a className="link--external" href="https://twitter.com/rreubenreyes">
          twitter
        </a>
      </h3>
      <h3>
        <a
          className="link--external"
          href="https://linkedin.com/in/reubenreyes"
        >
          linkedin
        </a>
      </h3>
      <h3>email</h3>
      <h3>resume/cv</h3>
    </div>
  </div>
)

export default Sidebar
