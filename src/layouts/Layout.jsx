import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/creator/new">Add Creator</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;