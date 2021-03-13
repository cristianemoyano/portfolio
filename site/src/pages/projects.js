import React from "react"
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ProjectPreview from '../components/project-preview';

export const query = graphql`
{
  allProjectsJson {
    edges {
      node {
        title
        slug
        description
        image {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
  }
}
`;

// markup
const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      {data.allProjectsJson.edges.map(({ node: project }) => (
        <ProjectPreview
          key={`preview-${project.slug}`}
          title={project.title}
          description={project.description}
          slug={project.slug}
          image={project.image.childImageSharp.gatsbyImageData}
        />
      ))}
    </Layout>
  )
};

export default ProjectsPage;
