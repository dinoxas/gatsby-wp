const path = require("path")
const slash = require("slash")
const { paginate } = require("gatsby-awesome-pagination")

// gatsby createPages API
exports.createPages = async ({ graphql, actions }) => {
  // extract built-in createPage action from collection of actions
  const { createPage } = actions

  const pageTemplate = path.resolve("./src/templates/page.js")
  const postTemplate = path.resolve("./src/templates/post.js")
  const archiveTemplate = path.resolve("./src/templates/archive.js")

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            status
            link
            wordpress_id
            wordpress_parent
          }
        }
      }

      allWordpressPost {
        edges {
          node {
            id
            link
            status
            categories {
              id
            }
          }
        }
      }

      allWordpressCategory {
        edges {
          node {
            id
            name
            slug
            count
          }
        }
      }
    }
  `)

  // check for errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  const {
    allWordpressPage,
    allWordpressPost,
    allWordpressCategory,
  } = result.data

  // For Page
  allWordpressPage.edges.forEach(edge => {
    if (edge.node.status === "publish") {
      createPage({
        path: edge.node.link,
        component: slash(pageTemplate),
        context: {
          id: edge.node.id,
          parent: edge.node.wordpress_parent,
          wpId: edge.node.wordpress_id,
        },
      })
    }
  })

  // For Post
  allWordpressPost.edges.forEach(edge => {
    if (edge.node.status === "publish") {
      createPage({
        path: `/trends${edge.node.link}`,
        component: slash(postTemplate),
        context: {
          id: edge.node.id,
        },
      })
    }
  })

  // For Archive
  // create archive pages for each category
  allWordpressCategory.edges.forEach(catEdge => {
    // first filter out the posts that belongs to the current category
    const filteredPosts = allWordpressPost.edges.filter(
      ({ node: { categories } }) =>
        categories.some(el => el.id === catEdge.node.id)
    )

    // dont show empty categories
    if (filteredPosts.length > 0) {
      paginate({
        createPage,
        items: filteredPosts,
        itemsPerPage: 10,
        pathPrefix: `/trends/${catEdge.node.slug}`,
        component: slash(archiveTemplate),
        context: {
          catId: catEdge.node.id,
          catName: catEdge.node.name,
          catSlug: catEdge.node.slug,
          catCount: catEdge.node.count,
          categories: allWordpressCategory.edges,
        },
      })
    }
  })
}
