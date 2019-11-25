import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from "../utils/Header"
import img from "../images/bcg/menuBcg.jpeg"

const Menu = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={img}>Menu</PageHeader>
    <h3>Menu</h3>
  </Layout>
)

export default Menu
