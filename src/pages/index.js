import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>Top Ten</h3>
    <ButtonWrapper>Click me</ButtonWrapper>
  </Layout>
)

const ButtonWrapper = styled.button`
  background: blue;
  color: white;
  padding: 10px;
  border-radius: 5px;
`

export default IndexPage
