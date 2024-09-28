import { useState } from "react";
import paris_image from '../Images/Paris.jpg';
import sydney_image from '../Images/Sydney.jpg';
import melbourne_image from '../Images/Melbourne.jpg';
import tiger_image from '../Images/Tiger.jpg';
import lion_image from '../Images/Lion.jpg';
import '../Styles/Home_Style.css';

function Home() {
    const notes = [
        {
            name: 'Paris',
            description: 'Paris, the capital of France, is renowned for its art, fashion, and culture. Iconic landmarks like the Eiffel Tower and the Louvre Museum attract millions of visitors each year, making it a symbol of romance and elegance.',
            image: paris_image
        },
        {
            name: 'Tiger',
            description: 'Tigers are magnificent big cats known for their striking orange fur with black stripes, making them one of the most recognizable animals in the world. They are solitary hunters, primarily found in forests and grasslands across Asia, and are critically endangered due to habitat loss and poaching.',
            image: tiger_image
        },
        {
            name: 'Sydney',
            description: 'Sydney, located on Australia’s east coast, is famous for its stunning harbor, iconic Sydney Opera House, and beautiful beaches like Bondi Beach. The city offers a mix of outdoor adventures and urban experiences, making it a popular destination for tourists and locals alike.',
            image: sydney_image
        },
        {
            name: 'Melbourne',
            description: 'Melbourne is a vibrant city in Australia known for its rich cultural scene, diverse cuisine, and sporting events. It boasts a blend of Victorian architecture and modern design, along with numerous galleries, theaters, and festivals, earning it the title of Australia’s cultural capital.',
            image: melbourne_image
        },
        {
            name: 'Lion',
            description: 'Lions, often referred to as the "king of the jungle," are social big cats that live in prides, primarily found in sub-Saharan Africa and a small population in India. Known for their powerful roar and majestic mane, they play a crucial role in their ecosystem as top predators.',
            image: lion_image
        },
    ];

    const [modalShow, setModalShow] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null);

    const handleReadClick = (note) => {
        setSelectedNote(note);
        setModalShow(true);
    };

    return (
        <>
            <center>
                <div className="d-flex justify-content-center row">
                    {notes.map((note, index) => (
                        <div key={index} className="col-auto mb-4" style={{ maxWidth: '30rem' }}>
                            <div className="card d-flex justify-content-center align-content-center border border-2 border-dark-subtle">
                                <div className="card-header placeholder-glow text-truncate px-2 myHeader border-2 border-dark-subtle">{note.name}</div>
                                <div className="placeholder-glow m-2">
                                    <img src={note.image} className="card-img-top placeholder-glow rounded img-fluid myimg" alt={note.name} />
                                </div>
                                <div className="card-body mb-2">
                                    <h5 className="card-title placeholder-glow text-truncate myTitle h-100">{note.name}</h5>
                                    <p className="card-text placeholder-glow text-truncate myContent">{note.description}</p>
                                </div>
                                <div className="d-flex justify-content-center align-content-center mb-2">
                                    <div className="mx-auto">
                                        <button className="btn btn-primary bg-gradient rounded-3 py-2 px-3" onClick={() => handleReadClick(note)}>
                                            <p className='h5'><i class="fa-solid fa-book"></i> Read</p>
                                        </button>
                                    </div>
                                    <div className="mx-auto">
                                        <button className="btn btn-warning bg-gradient rounded-3 py-2 px-3"><p className='h5'><i class="fa-solid fa-pen-to-square"></i> Edit</p></button>
                                    </div>
                                    <div className="mx-auto">
                                        <button className="btn btn-danger bg-gradient rounded-3 py-2 px-3"><p className='h5'><i class="fa-solid fa-trash"></i> Delete</p></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </center>
            {modalShow && selectedNote && (
                <Modal note={selectedNote} onClose={() => setModalShow(false)} />
            )}
        </>
    );
}

function Modal({ note, onClose }) {
    return (
        <div className="modal fade show" style={{ display: 'flex' }}>
            <div className="modal-dialog modal-fullscreen" role="document">
                <div className="modal-content ">
                    <div className="text-center">
                        <p className="modal-header modal-title display-5">{note.name}</p>
                    </div>
                    <div className="modal-body d-flex flex-column align-items-center">
                        <img src={note.image} className="img-fluid rounded-3 my-1" alt={note.name} style={{ maxHeight: '20rem', width: 'auto' }} />
                        <p className="mt-3" style={{ fontSize: '1.5rem' }}>{note.description}</p>
                    </div>
                    <div className="modal-footer px-4">
                        <button type="button" className="btn btn-secondary" onClick={onClose}><p className="h5">Close</p></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
