const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create project pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectsTemplate = path.resolve(`src/templates/project.js`)
  const result = await graphql(`
    {
        allProjectsJson {
            edges {
                node {
                slug
                }
            }
        }
    }
  `)
  result.data.allProjectsJson.edges.forEach(edge => {
    createPage({
      path: `${edge.node.slug}`,
      component: projectsTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}