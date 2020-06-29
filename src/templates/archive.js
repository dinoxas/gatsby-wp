import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BreadCrumb from "../components/BreadCrumb"
import PageHero from "../components/PageHero"
import ArchiveSidebar from "../components/archive/ArchiveSidebar"
import Pagination from "../components/archive/Pagination"
import {
  PageContent,
  StyledH2,
  StyledDate,
  StyledReadMore,
} from "./styles/archiveStyles"

// use data from data and pageContext props. humanPageNumber and numberOfPages come from gatsby-awesome-pagination
const archiveTemplate = ({
  data: { file, allWordpressPost },
  pageContext: {
    catId,
    catName,
    catSlug,
    categories,
    humanPageNumber,
    numberOfPages,
  },
}) => (
  <Layout>
    <PageHero img={file.childImageSharp.fluid} />
    <BreadCrumb
      parent={{
        link: "/trends/alla-trendspaningar",
        title: "trends",
      }}
    />

    <div className="container">
      <div className="row" style={{ marginBottom: "40px" }}>
        <ArchiveSidebar catId={catId} categories={categories} />
        <PageContent className="col-lg-9">
          <Pagination
            catSlug={catSlug}
            page={humanPageNumber}
            totalPages={numberOfPages}
          />
          <h1 dangerouslySetInnerHTML={{ __html: catName }} />
          {allWordpressPost.edges.map(post => (
            <article key={post.node.id} className="entry-content">
              <Link to={`/trends/${post.node.slug}/`}>
                <StyledH2
                  dangerouslySetInnerHTML={{ __html: post.node.title }}
                />
              </Link>
              <StyledDate
                dangerouslySetInnerHTML={{
                  __html: post.node.date.replace(/\W+/g, " "),
                }}
              />
              <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              <StyledReadMore to={`/trends/${post.node.slug}`}>
                Read more
              </StyledReadMore>
              <div className="dot_divider">
                <hr />
              </div>
            </article>
          ))}
          <Pagination
            catSlug={catSlug}
            page={humanPageNumber}
            totalPages={numberOfPages}
          />
        </PageContent>
      </div>
    </div>
  </Layout>
)

export default archiveTemplate

archiveTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
}

// used page query instead of static query as it needs to access variables
// skip and limit come from gatsby-awesome-pagination
// file path set in gatsby-config: gatsyby-source-filesystem
export const pageQuery = graphql`
  query($catId: String!, $skip: Int!, $limit: Int!) {
    allWordpressPost(
      filter: { categories: { elemMatch: { id: { eq: $catId } } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "DD, MMM, YYYY")
        }
      }
    }
    file(relativePath: { eq: "archive_headerImage.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
