import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { NavigationWrapper } from "./styles/NavigationStyles"

const Navigation = ({ menu }) => {
  return (
    <NavigationWrapper>
      <ul>
        {menu.items.map((item, index) => (
          <li key={index}>
            <Link to={item.url} activeClassName="nav-active">
              {item.title}
            </Link>
            {item.wordpress_children ? (
              <>
                <span>&gt;</span>
                <ul>
                  {item.wordpress_children.map((child, cIndex) => (
                    <li key={cIndex}>
                      <Link to={child.url} activeClassName="nav-active">
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </li>
        ))}
      </ul>
    </NavigationWrapper>
  )
}

Navigation.propTypes = {
  menu: PropTypes.object,
}

export default Navigation
