import React from 'react'
import { Link } from 'gatsby'
import './layout.css'

const ProjectPreview = ({slug, image, title, description}) => {
    return (
        <div className="project-preview">
            <h2>
                <Link to={`/${slug}/`}>
                    {title}
                </Link>
            </h2>
            <p>{description}</p>
            <p>
                <Link to={`/${slug}/`}>View this project &rarr;</Link>
            </p>
        </div>
    );
};

export default ProjectPreview;