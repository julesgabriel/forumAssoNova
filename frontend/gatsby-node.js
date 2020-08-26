const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
        graphql(request).then(result => {
            if (result.errors) {
                reject(result.errors)
            }

            return result;
        })
    )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({boundActionCreators, graphql}) => {
    const {createPage} = boundActionCreators;

    const getPages = makeRequest(graphql, `
    {
allStrapiCategories {
    edges {
      node {
        title
        url
      }
    }
  }
}
    `).then(result => {
        // Create pages for each article.
        result.data.allStrapiCategories.edges.forEach(({node}) => {
            createPage({
                path: `/${node.url}`,
                component: path.resolve(`src/components/templates/categories.js`),
                context: {
                    id: node.id,
                },
            })
        })
    });
    // Query for articles nodes to use in creating pages.
    return getPages;
};
