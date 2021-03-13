import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Project from '../components/project';

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      image {
        childImageSharp {
            gatsbyImageData(layout: FIXED)
        }
      }
    }
  }
`;



const ProjectTemplate = ({ data: { projectsJson: project } }) => (
  <Layout>
    <Project
      title={project.title}
      image={project.image.childImageSharp.gatsbyImageData}
      description={project.description}
      tags={project.tags}
      url={project.url}
    />
  </Layout>
);

export default ProjectTemplate;