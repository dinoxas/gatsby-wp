import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const LatestTrendWrapper = styled.div`
  text-align: center;
  margin: 2rem 0 3rem 0;

  .trend-link {
    background: #663399;
    padding: 12px 24px;
    color: #fff;
    border: 2px solid rgba(102, 51, 153, 1);
    transition: all 0.3s ease;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;

    &:hover {
      background: rgba(255, 255, 255, 1);
      color: rgba(102, 51, 153, 1);
    }
  }
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
            <Link
              to={`/trends/${data.allWordpressPost.edges[0].node.slug}/`}
              className="trend-link"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </LatestTrendWrapper>
  )
}

export default LatestTrend
