import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from "../utils/Header"
import img from "../images/bcg/aboutBcg.jpeg"

const About = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={img}>about</PageHeader>
    <h3>About</h3>
  </Layout>
)

export default About
