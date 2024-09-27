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
                <div className="d-flex justify-content-center row">
                    {notes.map(note => (
                        <div key={note.id} className="col-5 mb-4">
                            <div className="card">
                                <div className="card-header">{note.name}</div>
                                <img src={note.avatar} className="card-img-top" alt={note.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{note.name}</h5>
                                    <p className="card-text">{note.description}</p>
                                    <p className="card-text"><small className="text-muted">ID: {note.id}</small></p>
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