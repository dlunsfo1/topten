import React, { Component } from 'react';
import styled from 'styled-components';
import { styles } from '../../../utils';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 0,
        icon: <FaFacebook className="icon icon-facebook" />,
        path: 'https://www.facebook.com',
      },
      {
        id: 1,
        icon: <FaTwitter className="icon icon-twitter" />,
        path: 'https://www.twitter.com',
      },
      {
        id: 2,
        icon: <FaInstagram className="icon icon-instagram" />,
        path: 'https://www.instagram.com',
      },
    ],
  };
  render() {
    const { icons } = this.state;
    return (
      <FooterWrapper>
        <div className="title">Americas Top Ten Club</div>
        <div className="icons">
          {icons.map(item => {
            return (
              <a
                href={item.path}
                keyId={item.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            );
          })}
        </div>
        <p className="copyright">&copy; 2020 Tom Horan</p>
      </FooterWrapper>
    );
  }
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
  }

  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }

  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }

  .title {
    text-align: center;
    width: 10rem;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1rem;
    ${styles.border({ color: `${styles.colors.mainYellow}` })}
  }
`;
