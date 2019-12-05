import React from 'react';
import styled from 'styled-components';
import { styles } from '../utils';

export const Banner = ({ title, subtitle, type, children }) => {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
      <h4 className="type">{type}</h4>
      {children}
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  .title {
    color: ${styles.colors.mainWhite};
    font-size: 2rem;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: '0.1rem' })}
  }
  .subtitle {
    color: ${styles.colors.mainWhite};
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: '0.1rem' })}
  }
`;
