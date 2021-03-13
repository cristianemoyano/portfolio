import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import './layout.css'

const Project = ({image, title, description, url}) => {
    return (
        <div className="project">
            <GatsbyImage image={image} alt={title}/>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>
                <Link to={`/${url}/`}>View this project live &rarr;</Link>
            </p>
            <p>
                <Link to="/">&larr;</Link>
            </p>
        </div>
    );
};

export default Project;