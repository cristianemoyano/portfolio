import React from 'react'
import { Link } from 'gatsby'

import './layout.css'

const Layout = ({ children }) => (
    <React.Fragment>
        <header className="header">
            <Link to="/">Home</Link>
            <Link to="/#contact" className="right">Contact</Link>
            <Link to="/#about" className="right">About</Link>
            <Link to="/#projects" className="right">Projects</Link>
        </header>
        <main className="content">{children}</main>
        <footer className="footer">
            <a target="_blank" href="https://github.com/cristianemoyano">Github</a>
            <a target="_blank" href="https://www.linkedin.com/in/cristian-moyano/">Linkedin</a>
            <span className="right space">
                Made with ♡ by myself. Powered by <a target="_blank" href="https://www.gatsbyjs.com/">GatsbyJS</a>
            </span>
        </footer>
    </React.Fragment>
);

export default Layout;