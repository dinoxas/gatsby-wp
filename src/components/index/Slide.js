import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StyledImg, WbnSlide } from "./styles/HeroSliderStyles"

const Slide = ({ slide, active }) => {
  return (
    <WbnSlide className={active ? "active" : ""}>
      <StyledImg fluid={slide.featured_media.localFile.childImageSharp.fluid} />
      <div className="wbn-overlay-text">
        <h2 className="wbn-header">{slide.acf.slider_header}</h2>
        <p className="wbn-text">{slide.acf.slider_text}</p>
        <Link to={slide.acf.slider_button_link}>
          <button type="button">{slide.acf.slider_button_text}</button>
        </Link>
      </div>
    </WbnSlide>
  )
}

Slide.propTypes = {
  slide: PropTypes.object,
  active: PropTypes.bool,
}

export default Slide
