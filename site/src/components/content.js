import React from 'react'

const Content = ({ children, style }) => (
    <div className="section" style={style}>
        {children}
    </div>
);

export default Content;