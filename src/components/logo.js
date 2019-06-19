import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Logo = ({ siteTitle }) => (
  <h1 style={{
    display: 'inline-block',
    margin: 0,
    fontSize: '1.8rem',
    padding: '2rem'
  }}>
    <Link
      to="/"
    >
      {siteTitle}
    </Link>
  </h1>
)

Logo.propTypes = {
  siteTitle: PropTypes.string,
}

Logo.defaultProps = {
  siteTitle: ``,
}

export default Logo
