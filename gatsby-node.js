const path = require('path');


module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const post = path.resolve('./src/templates/post.js');
  const res = await graphql(`
    query{
      allContentfulBlogPost{
        edges{
          node{
            title,
            slug,
            publishDate(formatString: "MMMM Do, YYYY"),
          }
        }
      }
    }
  `);

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: post,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}


exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}