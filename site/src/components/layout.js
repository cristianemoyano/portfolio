import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"

import './layout.css'

const Layout = ({ children }) => (
    <React.Fragment>
        <Helmet>
            <meta charset="UTF-8" />
            <meta name="description" content="Hi there, I’m Cristian Moyano! I'm a backend software developer from Mendoza, Argentina."/>
            <meta name="keywords" content="HTML, CSS, JavaScript"/>
            <meta name="author" content="Cristian Moyano"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Cristian Moyano | Backend Software Developer</title>
        </Helmet>
        <header className="header">
            <Link to="/">Home</Link>
            <Link to="/#contact" className="right">Contact</Link>
            <Link to="/#about" className="right">About</Link>
            <Link to="/#projects" className="right">Projects</Link>
        </header>
        <main className="content">{children}</main>
        <footer className="footer">
            <a rel="noreferrer" target="_blank" href="https://github.com/cristianemoyano">Github</a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/cristian-moyano/">Linkedin</a>
            <span className="right space">
                Made with ♡ by myself. Powered by <a rel="noreferrer" target="_blank" href="https://www.gatsbyjs.com/">GatsbyJS</a>
            </span>
        </footer>
    </React.Fragment>
);

export default Layout;