import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/aboutBcg.jpeg"

const About = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={img}>
      <Banner title="About Tom Horan" subtitle="More about" />
    </PageHeader>
    <h3>About</h3>
  </Layout>
)

export default About
