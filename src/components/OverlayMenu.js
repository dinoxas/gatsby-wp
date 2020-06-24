import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import WhiteLogo from "../images/tango_logo_white.svg"
import CloseButton from "../images/tango_close_button.svg"
import { Overlay } from "./styles/OverlayMenuStyles"

const OverlayMenu = ({ menuOpen, callback }) => {
  const {
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(graphql`
    query OverlayMenu {
      menu: allWordpressWpApiMenusMenusItems(
        filter: { wordpress_id: { eq: 5 } }
      ) {
        totalCount
        edges {
          node {
            items {
              title
              url
            }
          }
        }
      }
    }
  `)

  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <img alt="white logo" className="whiteLogo" src={WhiteLogo} />

        <ul className="overlayMenu">
          {menu.items.map((item, index) => (
            <li key={index}>
              <Link to={item.url} activeClassName="overlayActive">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        >
          <img alt="close button" src={CloseButton} />
        </div>
      </div>
    </Overlay>
  )
}

OverlayMenu.propTypes = {
  menuOpen: PropTypes.bool,
  callback: PropTypes.func,
}

export default OverlayMenu
