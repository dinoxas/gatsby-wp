import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import BreadCrumb from "../components/BreadCrumb"
import PostSidebar from "../components/post/PostSidebar"
// import {  } from '../components/post/styles/PostSidebarStyles'

const PostContent = styled.article`
  margin: 1rem 0 0;
`

const postTemplate = ({ data: { post } }) => (
  <Layout>
    <BreadCrumb
      parent={{ link: "/trends/all-trendspaningar", title: "trends" }}
    />
    <div className="container">
      <div className="row" style={{ marginBottom: "2rem" }}>
        <PostSidebar
          date={post.date}
          author={post.author.name}
          categories={post.categories}
        />
        <PostContent className="col-lg-9">
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </PostContent>
      </div>
    </div>
  </Layout>
)

postTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default postTemplate

// pageQuery automatically inject query into component and query data is available via data prop
// query name is set to post so that it can be destructured above
// id is coming from context created in gatsby-node.js
export const pageQuery = graphql`
  query($id: String!) {
    post: wordpressPost(id: { eq: $id }) {
      title
      content
      author {
        name
      }
      date(formatString: "DD, MMM, YYYY")
      categories {
        id
        name
        slug
      }
    }
  }
`
