import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import AuthorIcon from "../../images/tango-author-icon.svg"
import CategoryIcon from "../../images/tango-category-icon.svg"
import DateIcon from "../../images/tango-date-icon.svg"
import { SidebarWrapper, SidebarMenu } from "./styles/PostSidebarStyles"

const PostSidebar = ({ date, author, categories }) => (
  <SidebarWrapper className="col-lg-3">
    <SidebarMenu>
      <li className="sidebar-menu-header">
        <img src={DateIcon} alt="Date icon" />
        <span>{date.replace(/\W+/g, " ")}</span>
      </li>
      <li className="sidebar-menu-header">
        <img src={AuthorIcon} alt="Author icon" />
        <span>{author}</span>
      </li>
      <li className="sidebar-menu-header">
        <img src={CategoryIcon} alt="Category icon" />
        <span>Categories</span>
      </li>
      {categories.map((cat, i) =>
        // for post with categories which dont belong to all-category
        cat.slug !== "all-trendspaningar" ? (
          <li key={cat.id} className="">
            <Link to={`/trends/${cat.slug}/`}>
              <span dangerouslySetInnerHTML={{ __html: cat.name }} />
            </Link>
          </li>
        ) : null
      )}
    </SidebarMenu>
  </SidebarWrapper>
)

PostSidebar.propTypes = {
  date: PropTypes.string,
  author: PropTypes.string,
  categories: PropTypes.array,
}

export default PostSidebar
