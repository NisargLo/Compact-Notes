import { useNavigate } from "react-router-dom";
import '../Styles/Home_Styles.css';
import { useState, useEffect } from "react";
import Delete from './Delete';

function Home() {
    const [notes, setNotes] = useState([]);
    const [error, setError] = useState([]);
    const APIURL = 'http://localhost:3100/';
    const navigate = useNavigate();

    useEffect(() => {
        fetchNotes();
    }, [APIURL]);

    const fetchNotes = () => {
        fetch(APIURL)
        .then(response => response.json())
        .then(data => {
            setNotes(data);
            setError(null);
        })
        .catch(error => {
            setError(`Error: `+error.message);
        });
    };


    const handleReadClick = (note) => {
        navigate(`/read/${note.title}`, { state: note });
    };

    const handleEditClick = (note) => {
        navigate(`/edit/${note.title}`, { state: note });
    };

    const handleDeleteClick = async (id) => {
        await setNotes((prevNotes) => prevNotes.filter(note => note.id !== id));
        fetchNotes();
    };

    return (
        <>
            <center>
                <div className="d-flex justify-content-center row">
                    {error && <p className="error h3 text-danger">{error}</p>}
                    {notes.map((note, index) => (
                        <div key={index} className="col-auto mb-4" style={{ maxWidth: '30rem' }}>
                            <div className="card d-flex justify-content-center align-content-center border border-2 border-dark-subtle">
                                <div className="card-header text-truncate px-2 myHeader border-2 border-dark-subtle">{note.title}</div>
                                <div className="m-2">
                                    <img src={note.image} className="card-img-top rounded img-fluid myimg" alt={note.title} />
                                </div>
                                <div className="card-body mb-2">
                                    <p className="card-title text-truncate myTitle h-100">{note.title}</p>
                                    <p className="card-text text-truncate myContent">{note.description}</p>
                                </div>
                                <div className="d-flex justify-content-center mb-2">
                                    <div className="mx-3">
                                        <button className="btn btn-primary rounded-3 py-2 px-3" onClick={() => handleReadClick(note)}><p className='h5'><i className="fa-solid fa-book"></i> Read</p></button>
                                    </div>
                                    <div className="mx-3">
                                        <button className="btn btn-warning rounded-3 py-2 px-3" onClick={() => handleEditClick(note)}><p className='h5'><i className="fa-solid fa-pen-to-square"></i> Edit</p></button>
                                    </div>
                                    <div className="mx-3">
                                        <Delete note={note} onDelete={handleDeleteClick} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </center>
        </>
    );
}

export default Home;
