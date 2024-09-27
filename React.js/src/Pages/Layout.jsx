import { Outlet, Link } from 'react-router-dom';
import '../Styles/Layout_Styles.css';

function Layout() {
    return (
        <div className='container-fluid'>
            <div className='mb-4 sticky-top'>
                <nav class="navbar bg-primary bg-gradient">
                    <a href="http://localhost:3000" class="navbar-brand"><i class="text-light fa-solid fa-note-sticky h1 ms-4" /></a>
                    <Link to="/" className="h2 mx-5 text-decoration-none text-light">Home</Link>
                    <Link to="/About" className="h2 mx-5 text-decoration-none text-light">About</Link>
                    <Link to="/Contact" className="h2 mx-5 text-decoration-none text-light">Contact</Link>
                    <form class="d-flex ms-auto" role="search">
                        <input class="form-control m-3 mysearchbar bg-light border-secondary" type="search" placeholder="Search Notes" aria-label="Search" />
                        <button class="btn btn-light p-2 px-3 my-3 me-4" type="submit">Search</button>
                    </form>
                </nav>
            </div>
            <div className='mb-3'>
                <Outlet />
            </div>
            <div className='custom-fixed bg-secondary-subtle border border-secondary rounded ms-3 me-3'>
                <button className="btn btn-success bg-gradient my-3 mx-auto rounded-3 py-2 px-3 me-4 ms-4"><p className='h4'>Add</p></button>
                <button className="btn btn-warning bg-gradient my-3 mx-auto rounded-3 py-2 px-3 me-4"><p className='h4'>Edit</p></button>
                <button className="btn btn-danger bg-gradient my-3 mx-auto rounded-3 py-2 px-3 me-4"><p className='h4'>Delete</p></button>
            </div>
        </div>
    );
}

export default Layout;