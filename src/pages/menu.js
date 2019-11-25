import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/menuBcg.jpeg"

const Menu = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={img}>
      <Banner title="Menu" subtitle="more of what we have" />
    </PageHeader>
    <h3>Menu</h3>
  </Layout>
)

export default Menu
