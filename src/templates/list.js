import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { IndexHeader, Banner, BannerButton } from '../utils';
import img from '../images/bcg/homeBcg.jpeg';
import QuickInfo from '../components/HomePageComponents/QuickInfo';
import Listing from '../components/Listing';

import Menu from '../components/HomePageComponents/Menu';

const Index = () => (
  <Layout>
    <SEO title="Home" />
    {/* <IndexHeader img={img}>
      <Banner title="America's Top Ten" subtitle="Tom Horan">
        <BannerButton style={{ margin: '2rem auto' }}>Click</BannerButton>
      </Banner>
    </IndexHeader> */}
    <QuickInfo />
    {/* <Gallery /> */}
    <Listing />
    <Menu />
  </Layout>
);

export default Index;
