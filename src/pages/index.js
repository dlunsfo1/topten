import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { IndexHeader, Banner } from "../utils"
import img from "../images/bcg/homeBcg.jpeg"

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <IndexHeader img={img}>
      <Banner title="America's Top Ten" subtitle="Tom Horan">
        Banner
      </Banner>
    </IndexHeader>
  </Layout>
)

export default Index
