import { Outlet, Link, useNavigate } from 'react-router-dom';
import '../Styles/Layout_Styles.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function Layout() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddClick = () => {
        navigate('/add');
    };

    const [title, setTitle] = useState('');

    const handleSearchClick = (e) => {
        e.preventDefault();
        if (title.trim()) {
            console.log("Searching for: ", title);
            navigate(`/search/${title}`);
            setTitle('');
        }
    };

    const isHomePage = location.pathname === '/';

    return (
        <div className='container-fluid'>
            <div className='mb-4 sticky-top'>
                <nav className="navbar bg-secondary bg-gradient">
                    <a href="/" className="navbar-brand"><i className="text-light fa-solid fa-note-sticky h1 ms-4" /></a>
                    <Link to="/" className="h2 ms-5 me-auto text-decoration-none text-light"><i className="fa-solid fa-house"></i> Home</Link>
                    <Link to="/about" className="h2 me-auto text-decoration-none text-light"><i className="fa-solid fa-users"></i> About</Link>
                    <Link to="/contact" className="h2 me-auto text-decoration-none text-light"><i className="fa-solid fa-phone"></i> Contact</Link>
                    <form className="d-flex ms-auto" role="search">
                        <input className="form-control m-3 mysearchbar bg-light border-secondary" type="search" placeholder="Search Notes" aria-label="Search" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <button className="btn btn-light p-2 px-3 my-3 me-4" type="submit" onClick={handleSearchClick}>Search</button>
                    </form>
                </nav>
            </div>
            <div className='my-3'>
                <Outlet />
            </div>
            <div className='custom-fixed bg-light bg-gradient rounded-3 ms-3 me-3 p-1'>
                {isHomePage && (
                    <button
                        className="btn btn-success bg-gradient rounded-3 py-2 px-3"
                        onClick={handleAddClick}>
                        <p className='h3'>
                            <i className="fa-solid fa-plus text-light-subtle"></i> Add
                        </p>
                    </button>
                )}
            </div>
        </div>
    );
}

export default Layout;
