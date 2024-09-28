import { Outlet, Link, useNavigate } from 'react-router-dom';
import '../Styles/Layout_Styles.css';
import { useState } from 'react';

function Layout() {
    const navigate = useNavigate();

    const handleAddClick = () => {
        navigate('/add');
    };

    const [inAddPage, setInAddPage] = useState(false);

    return (
        <div className='container-fluid'>
            <div className='mb-4 sticky-top'>
                <nav class="navbar bg-secondary bg-gradient">
                    <a href="http://localhost:3000" class="navbar-brand"><i class="text-light fa-solid fa-note-sticky h1 ms-4" /></a>
                    <Link to="/" className="h2 ms-5 me-auto text-decoration-none text-light"><i class="fa-solid fa-house"></i> Home</Link>
                    <Link to="/about" className="h2 me-auto text-decoration-none text-light"><i class="fa-solid fa-users"></i> About</Link>
                    <Link to="/contact" className="h2 me-auto text-decoration-none text-light"><i class="fa-solid fa-phone"></i> Contact</Link>
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
                {inAddPage ? (
                    <button
                        className="btn btn-success bg-gradient rounded-3 p-3"
                        onClick={() => {
                            setInAddPage(false);
                            navigate(-1);
                        }}>
                        <p className='h4'>
                            <i class="fa-solid fa-upload"></i> Submit
                        </p>
                    </button>
                ) : (
                    <button
                        className="btn btn-success bg-gradient rounded-3 p-3"
                        onClick={() => {
                            setInAddPage(true);
                            handleAddClick();
                        }}>
                        <p className='h4'>
                            <i className="fa-solid fa-plus text-light-subtle"></i> Add Note
                        </p>
                    </button>
                )}
            </div>
        </div>
    );
}

export default Layout;