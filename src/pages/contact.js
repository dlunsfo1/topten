import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/contactBcg.jpeg"

const Contact = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={img}>
      <Banner title="Contact Us" subtitle="tell us what you think" />
    </PageHeader>
    <h3>Contact</h3>
  </Layout>
)

export default Contact
