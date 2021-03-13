import React from 'react'
import { Link } from 'gatsby'
import './layout.css'

const Layout = ({ children }) => (
    <React.Fragment>
        <header className="header">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </header>
<main className="content">{children}</main>
        <footer className="footer">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </footer>
    </React.Fragment>
);

export default Layout;