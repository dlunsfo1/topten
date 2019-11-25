import React from 'react';
import styled from 'styled-components';
import { styles } from '../utils';

export const Title = ({ title, summary }) => {
  return (
    <TitleWrapper>
      <h3 className="summary">{summary}</h3>
      <h1 className="title">{title}</h1>
      <div className="underline"></div>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  text-align: center;
  .summary {
    ${styles.letterSpacing({})};
    font-size: 1rem;
    color: ${styles.colors.mainYellow};
  }
  .title {
    ${styles.letterSpacing({})};
    font-size: 2rem;
    text-transform: uppercase;
  }
  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 0.5rem auto;
  }
`;
