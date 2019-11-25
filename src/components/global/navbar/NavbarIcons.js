import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils/"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon icon-facebook" />,
        path: "https://www.facebook.com",
      },
      {
        id: 2,
        icon: <FaTwitter className="icon icon-twitter" />,
        path: "https://www.twitter.com",
      },
      {
        id: 3,
        icon: <FaInstagram className="icon icon-instagram" />,
        path: "https://www.instagram.com",
      },
    ],
  }
  render() {
    const { icons } = this.state
    return (
      <IconWrapper>
        {icons.map(item => {
          return (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transObject({})}
  }
  .icon-facebook {
    color: #3b579d;
  }
  .icon-twitter {
    color: #3ab7f0;
  }
  .icon-instagram {
    color: #da5f53;
  }
  .icon:hover {
    color: ${styles.colors.mainYellow};
  }
  display: none;

  @media (min-width: 768px) {
    display: flex;
    width: 4rem;
    justify-content: space-around;
  }
`
