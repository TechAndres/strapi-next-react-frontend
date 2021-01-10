import Nav from "./nav";

const Layout = ({ children, categories, seo }) => (
  <React.Fragment>
    <Nav categories={categories} />
    {children}
  </React.Fragment>
);

export default Layout;
