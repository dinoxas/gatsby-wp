import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"

// using gatsby image instead of normal img
const StyledImg = styled(Img)`
  height: 300px;
`

const PageHero = ({ img }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col" style={{ padding: "0" }}>
        <StyledImg fluid={img} />
      </div>
    </div>
  </div>
)

PageHero.propTypes = {
  img: PropTypes.object,
}

export default PageHero
