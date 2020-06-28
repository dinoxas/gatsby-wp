import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { BreadCrumbWrapper } from "./styles/BreadCrumbStyles"

const BreadCrumb = ({ parent }) => {
  // const { title, link } = parent
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9 offset-lg-3">
          <BreadCrumbWrapper>
            <Link to="/">
              <span>Tango Brand Alliance</span>
            </Link>
            <span className="divider">/</span>
            {parent ? (
              <>
                <Link to={parent.link}>
                  <span dangerouslySetInnerHTML={{ __html: parent.title }} />
                </Link>
                <span className="divider">/</span>
              </>
            ) : null}
          </BreadCrumbWrapper>
        </div>
      </div>
    </div>
  )
}

BreadCrumb.propTypes = {
  parent: PropTypes.object,
}

export default BreadCrumb
