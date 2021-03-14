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
            <Link target="_blank" to="https://github.com/cristianemoyano">Github</Link>
            <Link target="_blank" to="https://www.linkedin.com/in/cristian-moyano/">Linkedin</Link>
            <span className="right space">
                Made with ♡ by myself. Powered by <Link target="_blank" to="https://www.gatsbyjs.com/">GatsbyJS</Link>
            </span>
        </footer>
    </React.Fragment>
);

export default Layout;