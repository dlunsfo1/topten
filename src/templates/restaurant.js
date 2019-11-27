import React, { Children } from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';
import { PageHeader, Banner } from '../utils';
import img from '../images/bcg/aboutBcg.jpeg';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { Section } from '../utils';
import Gallery from '../components/HomePageComponents/Gallery-1';

const Restaurant = ({ data }) => {
  const { name, city, state, zipcode, photos } = data.contentfulRestaurant;
  return (
    <Layout>
      <SEO title="Home" />
      <PageHeader img={photos[0].file.url}>
        <Banner title={name} subtitle={`${city}, ${state}`} />
      </PageHeader>
      <Section>
        <ContenteWrapper>
          {documentToReactComponents(data.contentfulRestaurant.review.json)}
        </ContenteWrapper>
        <Gallery />
      </Section>
    </Layout>
  );
};

export default Restaurant;

export const query = graphql`
  query restaurantQuery($slug: String) {
    contentfulRestaurant(slug: { eq: $slug }) {
      name
      city
      state
      zipcode
      photos {
        file {
          url
        }
      }
      review {
        json
      }
    }
  }
`;

const ContenteWrapper = styled.section`
  width: 90%;
  margin: 2rem auto;
  p {
    margin: 1rem 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
    font-size: 1em;
    line-height: 2rem;
  }
`;
