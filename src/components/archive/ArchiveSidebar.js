import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import tangoMail from "../../images/tango-mail-icon.svg"
import tangoPage from "../../images/tango-page-icon.svg"
import { SidebarWrapper, SidebarMenu } from "./styles/ArchiveSidebarStyles"

const ArchiveSidebar = ({ catId, categories }) => {
  // spread over categories prevent mutation
  const sortedCategories = [...categories].sort((x, y) => {
    if (x.node.slug === "alla-trendspaningar") return -1
    if (y.node.slug === "alla-trendspaningar") return 1
    return 0
  })

  console.log(categories)
  console.log(sortedCategories)
  return (
    <SidebarWrapper className="col-lg-3">
      <SidebarMenu>
        <li className="sidebar-menu-header">
          <img src={tangoPage} alt="Page icon" />
          <span>Trends</span>
        </li>
        {sortedCategories.map(cat => {
          if (cat.node.count !== 0) {
            // uncategorized post
            return cat.node.slug !== "okategoriserade" ? (
              <li
                key={cat.node.id}
                className={cat.node.id === catId ? "sidebar-highlighted" : ""}
              >
                <span className="count">{cat.node.count}</span>
                {cat.node.id === catId ? (
                  <span dangerouslySetInnerHTML={{ __html: cat.node.name }} />
                ) : (
                  <Link to={`/trends/${cat.node.slug}/`}>
                    <span dangerouslySetInnerHTML={{ __html: cat.node.name }} />
                  </Link>
                )}
              </li>
            ) : null
          }
          return null
        })}

        <li className="sidebar-menu-header">
          <div style={{ marginTop: "2rem" }}>
            <img alt="Mail icon" src={tangoMail} /> <span>Mailing List</span>
          </div>
        </li>
        <p>
          Do you want to get updated when we publish new trend posts?
          <br />
          Just email us with your name, company name and email{" "}
          <a href="mailto:test.test.com">John Smith</a>.
        </p>
      </SidebarMenu>
    </SidebarWrapper>
  )
}

export default ArchiveSidebar

ArchiveSidebar.propTypes = {
  catId: PropTypes.string,
  categories: PropTypes.array,
}
