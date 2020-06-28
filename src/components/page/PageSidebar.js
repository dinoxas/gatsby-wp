import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  SidebarWrapper,
  SidebarMenu,
  EducationBadge,
} from "./styles/PageSidebarStyles"
import tangoMail from "../../images/tango-mail-icon.svg"
import tangoPage from "../../images/tango-page-icon.svg"

const PageSidebar = ({ parentChildren, children, currentPage, parent }) => {
  const getParentContent = () =>
    // page with no children, show default text
    children.edges.length === 0 ? (
      <>
        <li className="sidebar-menu-header">
          <img alt="Mail icon" src={tangoMail} /> <span>Mailing List</span>
        </li>
        <p>
          Do you want to get updated when we publish new trend posts?
          <br />
          Just email us with your name, company name and email{" "}
          <a href="mailto:test.test.com">John Smith</a>.
        </p>
      </>
    ) : (
      // page with children, show menu
      <>
        <li className="sidebar-menu-header">
          <img alt="Page icon" src={tangoPage} />{" "}
          <span dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        </li>
        {children.edges.map(child => (
          <li key={child.node.id}>
            <Link to={child.node.link}>
              <span dangerouslySetInnerHTML={{ __html: child.node.title }} />
            </Link>
          </li>
        ))}
      </>
    )

  const getChildContent = () => (
    <>
      <li className="sidebar-menu-header">
        <img alt="Page icon" src={tangoPage} />{" "}
        <span dangerouslySetInnerHTML={{ __html: parent.title }} />
      </li>

      {parentChildren.edges.map(child => (
        <li
          className={
            currentPage.id === child.node.id ? "sidebar-highlighted" : ""
          }
          key={child.node.id}
        >
          {currentPage.id === child.node.id ? (
            <span dangerouslySetInnerHTML={{ __html: child.node.title }} />
          ) : (
            <Link to={child.node.link}>
              <span dangerouslySetInnerHTML={{ __html: child.node.title }} />
            </Link>
          )}
        </li>
      ))}
    </>
  )

  return (
    <SidebarWrapper className="col-lg-3">
      {currentPage.acf.education ? (
        <EducationBadge>
          <a href="mailto:test.test.com">Enrol for the course!</a>
        </EducationBadge>
      ) : null}
      <SidebarMenu>
        {currentPage.wordpress_parent === 0
          ? getParentContent()
          : getChildContent()}
      </SidebarMenu>
    </SidebarWrapper>
  )
}

PageSidebar.propTypes = {
  parentChildren: PropTypes.object,
  currentPage: PropTypes.object,
  parent: PropTypes.object,
  children: PropTypes.object,
}

export default PageSidebar
