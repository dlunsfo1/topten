import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { IndexHeader } from "../utils"
import img from "../images/bcg/homeBcg.jpeg"

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <IndexHeader img={img}>Top Ten</IndexHeader>
  </Layout>
)

export default Index
