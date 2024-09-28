import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Read() {
    const location = useLocation();
    const navigate = useNavigate();
    const note = location.state;

    return (
        <div className="container-fluid">
            <div className="text-center mb-4">
                <h1 className="display-2">{note.title}</h1>
            </div>
            <div className="read-content d-flex flex-column align-items-center mb-2">
                <img src={note.image} className="img-fluid rounded-3 mb-3" alt={note.title} style={{ maxHeight: '20rem', width: 'auto' }} />
                <p style={{ fontSize: '2rem' }}>{note.description}</p>
            </div>
            <div className="text-center">
                <button className="btn btn-secondary rounded-3 py-2 px-3" onClick={() => navigate(-1)}>
                    <p className="h5"><i class="fa-solid fa-backward"></i> Back</p>
                </button>
            </div>
        </div>
    );
}

export default Read;
