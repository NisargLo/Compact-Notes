import { useNavigate } from "react-router-dom";
// import { useState } from 'react';
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

    const navigate = useNavigate();

    const handleReadClick = (note) => {
        navigate(`/read/${note.name}`, { state: note });
    };

    const handleEditClick = (note) => {
        navigate(`/edit/${note.name}`, { state: note });
    };

    return (
        <>
            <center>
                <div className="d-flex justify-content-center row">
                    {notes.map((note, index) => (
                        <div key={index} className="col-auto mb-4" style={{ maxWidth: '30rem' }}>
                            <div className="card d-flex justify-content-center align-content-center border border-2 border-dark-subtle">
                                <div className="card-header text-truncate px-2 myHeader border-2 border-dark-subtle">{note.name}</div>
                                <div className="m-2">
                                    <img src={note.image} className="card-img-top rounded img-fluid myimg" alt={note.name} />
                                </div>
                                <div className="card-body mb-2">
                                    <h5 className="card-title text-truncate myTitle h-100">{note.name}</h5>
                                    <p className="card-text text-truncate myContent">{note.description}</p>
                                </div>
                                <div className="d-flex justify-content-center mb-2">
                                    <div className="mx-auto">
                                        <button className="btn btn-primary rounded-3 py-2 px-3" onClick={() => handleReadClick(note)}><p className='h5'><i className="fa-solid fa-book"></i> Read</p></button>
                                    </div>
                                    <div className="mx-auto">
                                        <button className="btn btn-warning rounded-3 py-2 px-3" onClick={() => handleEditClick(note)}><p className='h5'><i className="fa-solid fa-pen-to-square"></i> Edit</p></button>
                                    </div>
                                    <div className="mx-auto">
                                        <button className="btn btn-danger rounded-3 py-2 px-3"><p className='h5'><i className="fa-solid fa-trash"></i> Delete</p></button>
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
