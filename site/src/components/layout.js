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
            <Link to="/">Github</Link>
            <Link to="/">Linkedin</Link>
        </footer>
    </React.Fragment>
);

export default Layout;