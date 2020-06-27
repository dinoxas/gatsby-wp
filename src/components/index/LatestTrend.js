import React from "react"
// import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const LatestTrendWrapper = styled.div`
  text-align: center;
  margin: 2rem 0;
`

const LatestTrend = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost(sort: { order: [DESC], fields: [date] }) {
        edges {
          node {
            slug
            title
            excerpt
          }
        }
      }
    }
  `)

  return (
    <LatestTrendWrapper>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Latest Trend</h2>
            <h4>{data.allWordpressPost.edges[0].node.title}</h4>
            <div
              dangerouslySetInnerHTML={{
                __html: data.allWordpressPost.edges[0].node.excerpt,
              }}
            />
            <Link to={`/trends/${data.allWordpressPost.edges[0].node.slug}/`}>
              <h5>Read more</h5>
            </Link>
          </div>
        </div>
      </div>
    </LatestTrendWrapper>
  )
}

export default LatestTrend
