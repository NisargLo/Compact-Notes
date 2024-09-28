import { useNavigate } from "react-router-dom";
import '../Styles/Home_Style.css';
import { useState, useEffect } from "react";
import Delete from './Delete';

function Home() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch('https://66f37eed71c84d805878e31d.mockapi.io/Notes').then((res) => {
            return res = res.json();
        }).then((data) => {
            setNotes(data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const navigate = useNavigate();

    const handleReadClick = (note) => {
        navigate(`/read/${note.name}`, { state: note });
    };

    const handleEditClick = (note) => {
        navigate(`/edit/${note.name}`, { state: note });
    };

    const handleDeleteClick = (id) => {
        setNotes((prevNotes) => prevNotes.filter(note => note.id !== id));
    };

    return (
        <>
            <center>
                <div className="d-flex justify-content-center row">
                    {notes.map((note, index) => (
                        <div key={index} className="col-auto mb-4" style={{ maxWidth: '30rem' }}>
                            <div className="card d-flex justify-content-center align-content-center border border-2 border-dark-subtle">
                                <div className="card-header text-truncate px-2 myHeader border-2 border-dark-subtle">{note.title}</div>
                                <div className="m-2">
                                    <img src={note.image} className="card-img-top rounded img-fluid myimg" alt={note.title} />
                                </div>
                                <div className="card-body mb-2">
                                    <h5 className="card-title text-truncate myTitle h-100">{note.title}</h5>
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
