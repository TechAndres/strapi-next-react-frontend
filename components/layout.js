import Nav from './nav';
import React from 'react';

const Layout = ({ children, categories, seo }) => (
  <React.Fragment>
    <Nav categories={categories} />
    {children}
  </React.Fragment>
);

export default Layout;
