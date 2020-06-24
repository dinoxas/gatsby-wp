import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import OverlayMenu from "./OverlayMenu"
import Hamburger from "./Hamburger"

import "./layout.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"

const Primary = styled.main`
  margin: 2rem auto;
`

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Header />
      <Primary id="primary" className="content-area">
        <main id="main" className="site-main" role="main">
          {/** render child compoent */}
          {children}
        </main>
      </Primary>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
