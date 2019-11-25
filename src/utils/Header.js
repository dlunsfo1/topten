import React from "react"
import styled from "styled-components"

const IndexHeader = ({ img, children }) => {
  return <HeaderWrapper img={img}>{children}</HeaderWrapper>
}

const HeaderWrapper = styled.header`
  min-height: calc(100vh - 55.78px);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`

export { IndexHeader }
