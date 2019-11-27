/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const restaurantTemplate = path.resolve(`src/templates/restaurant.js`);
  const listTemplate = path.resolve(`src/templates/list.js`);

  return graphql(`
    {
      allContentfulRestaurant {
        edges {
          node {
            slug
          }
        }
      }

      allContentfulTopTenCategory {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.error;
    }

    result.data.allContentfulRestaurant.edges.forEach(edge => {
      createPage({
        path: `/restaurants/${edge.node.slug}`,
        component: restaurantTemplate,
        context: {
          slug: edge.node.slug,
        },
      });
    });

    result.data.allContentfulTopTenCategory.edges.forEach(edge => {
      createPage({
        path: `/lists/${edge.node.slug}`,
        component: listTemplate,
        context: {
          slug: edge.node.slug,
        },
      });
    });
  });
};
