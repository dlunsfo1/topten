import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../utils"

export default class NavbarLinks extends Component {
  state = {
    links: [
      { id: 0, path: "/", name: "Home" },
      { id: 1, path: "/about", name: "About" },
      { id: 2, path: "/menu", name: "Menu" },
      { id: 3, path: "/contact", name: "Contact" },
    ],
  }
  render() {
    const { links } = this.state
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {links.map(link => {
          return (
            <li key={link.id}>
              <Link to={link.path} className="nav-link">
                {link.name}
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  //
  height: ${props => (props.open ? "152px" : "0px")};
  overflow: hidden;
  ${styles.transObject({ time: "1s" })};
  //

  @media (min-width: 768px) {
    //
    height: auto;
    //
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`
