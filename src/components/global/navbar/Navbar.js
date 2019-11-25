import React, { Component } from "react"

import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarIcons from "./NavbarIcons"

import styled from "styled-components"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
  }

  handleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen }
    })
  }

  render() {
    const { navbarOpen } = this.state
    return (
      <NavWrapper>
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <NavbarLinks navbarOpen={navbarOpen} />
        <NavbarIcons />
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
