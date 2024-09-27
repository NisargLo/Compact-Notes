import { Outlet, Link } from 'react-router-dom';
import '../Styles/Layout_Styles.css';

function Layout() {
    return (
        <div className='container-fluid'>
            <div className='mb-3'>
                <nav class="navbar bg-success-subtle">
                    <a href="http://localhost:3000" class="navbar-brand"><i class="fa-solid fa-note-sticky h1 ms-4 text-info-emphasis" /></a>
                    <Link to="/" className="h2 mx-5 text-decoration-none text-info-emphasis">Home</Link>
                    <Link to="/About" className="h2 mx-5 text-decoration-none text-info-emphasis">About</Link>
                    <Link to="/Contact" className="h2 mx-5 text-decoration-none text-info-emphasis">Contact</Link>
                    <Link to="/Login" className="h2 mx-5 text-decoration-none text-info-emphasis">Login</Link>
                    <form class="d-flex ms-auto" role="search">
                        <input class="form-control m-3 mysearchbar bg-light border-secondary" type="search" placeholder="Search Notes" aria-label="Search" />
                        <button class="btn btn-outline-secondary p-2 px-3 my-3 mx-3 me-4" type="submit">Search</button>
                    </form>
                </nav>
            </div>
            <div className='mb-3'>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;