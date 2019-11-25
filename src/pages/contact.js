import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { PageHeader } from "../utils/Header"
import img from "../images/bcg/contactBcg.jpeg"

const Contact = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={img}>Contact</PageHeader>
    <h3>Contact</h3>
  </Layout>
)

export default Contact
