import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>Top Ten</h3>
    <div className="container">
      <div className="row">
        <div className="col-6">Column 1</div>
        <dvi className="col-6">Column 2</dvi>
      </div>
    </div>
  </Layout>
)

export default IndexPage
