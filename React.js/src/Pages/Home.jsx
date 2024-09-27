import { useState, useEffect } from "react";

function Home() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch('https://66f37eed71c84d805878e31d.mockapi.io/Notes')
            .then(res => res.json())
            .then(data => setNotes(data))
            .catch(error => console.log('Error: ', error));
    }, []);

    return (
        <>
            <center>
                <div className="d-flex justify-content-center row px-4">
                    {notes.map(note => (
                        <div key={note.id} className="col-4 mb-4">
                            <div className="card">
                                <div className="card-header placeholder-glow">{note.name}</div>
                                <img src={note.avatar} className="card-img-top placeholder-glow" alt={note.name} />
                                <div className="card-body">
                                    <h5 className="card-title placeholder-glow">{note.name}</h5>
                                    <p className="card-text placeholder-glow">{note.description}</p>
                                    <p className="card-text placeholder-glow"><small className="text-muted">ID: {note.id}</small></p>
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