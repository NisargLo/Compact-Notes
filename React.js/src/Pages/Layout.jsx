import { Outlet, Link } from 'react-router-dom';
import '../Styles/Layout_Styles.css';

function Layout() {
    return (
        <div className='container-fluid'>
            <div className='mb-4 sticky-top'>
                <nav class="navbar bg-secondary bg-gradient">
                    <a href="http://localhost:3000" class="navbar-brand"><i class="text-light fa-solid fa-note-sticky h1 ms-4" /></a>
                    <Link to="/" className="h2 ms-5 me-auto text-decoration-none text-light">Home</Link>
                    <Link to="/About" className="h2 me-auto text-decoration-none text-light">About</Link>
                    <Link to="/Contact" className="h2 me-auto text-decoration-none text-light">Contact</Link>
                    <form class="d-flex ms-auto" role="search">
                        <input class="form-control m-3 mysearchbar bg-light border-secondary" type="search" placeholder="Search Notes" aria-label="Search" />
                        <button class="btn btn-light p-2 px-3 my-3 me-4" type="submit">Search</button>
                    </form>
                </nav>
            </div>
            <div className='my-3'>
                <Outlet />
            </div>
            <div className='custom-fixed bg-light bg-gradient rounded-3 ms-3 me-3 p-1'>
                <button className="btn btn-success bg-gradient rounded-3 p-3"><p className='h4'><i class="fa-solid fa-plus text-light-subtle"></i> Add Note</p></button>
            </div>
        </div>
    );
}

export default Layout;