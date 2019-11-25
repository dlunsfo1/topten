import React from "react"
import PropTypes from "prop-types"

import Navbar from "../components/global/navbar/"

// import { useStaticQuery, graphql } from "gatsby"
// import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
