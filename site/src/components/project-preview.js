import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import './layout.css'

const ProjectPreview = ({slug, image, title, description}) => {
    return (
        <div className="project-preview">
            <Link to={`/${slug}/`}>
                <GatsbyImage image={image} alt={title} />
            </Link>
            <h2>
                <Link to={`/${slug}/`}>
                    {title}
                </Link>
            </h2>
            <p>
                {description}
            </p>
        </div>
    );
};

export default ProjectPreview;