import React from "react"
import { Link } from "gatsby"

import iconFB from "../images/tango-facebook-icon.svg"
import iconIG from "../images/tango-instagram-icon.svg"
import iconLI from "../images/tango-linkedin-icon.svg"

import { FooterWrapper } from "./styles/FooterStyles"

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="whiteText">Contact</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h3>John Smith</h3>
            <p className="tango-contact">
              <a href="mailto:test@test.com">test@test.com</a>
            </p>
            <p className="tango-contact">+44 (0) 208 877 5566</p>
            <span className="social">
              <a
                href="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com"
              >
                <img alt="linkedin logo" src={iconLI} />
              </a>
            </span>
          </div>

          <div className="col-md-4">
            <h3>Nick Johnson</h3>
            <p className="tango-contact">
              <a href="mailto:test@test.com">test@test.com</a>
            </p>
            <p className="tango-contact">+44 (0) 208 877 5987</p>
            <span className="social">
              <a
                href="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com"
              >
                <img alt="linkedin logo" src={iconLI} />
              </a>
            </span>
          </div>
          <div className="col-md-4">
            <h3>Company Name Ltd</h3>
            <p className="tango-contact">PO BOX 160, 123 London SW16</p>
            <p className="tango-contact">Visit: 987 London SW16</p>

            <span className="social">
              <a
                href="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com"
              >
                <img className="facebook" alt="facebook logo" src={iconFB} />
              </a>

              <a
                href="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com"
              >
                <img className="instagram" alt="instagram logo" src={iconIG} />
              </a>
            </span>
          </div>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer
