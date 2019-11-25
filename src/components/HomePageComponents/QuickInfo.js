import React, { Component } from 'react';
import { Section, Title, SectionButton } from '../../utils';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { styles } from '../../utils';

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title summary="Summary message" title="title of" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </QuickInfoWrapper>
        <Link to="/about/" style={{ textDecoration: 'none' }}>
          <SectionButton style={{ margin: '2rem auto' }}>About</SectionButton>
        </Link>
      </Section>
    );
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    width: 60%;
  }
`;
