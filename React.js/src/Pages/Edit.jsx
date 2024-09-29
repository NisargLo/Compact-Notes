import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Edit() {
    const location = useLocation();
    const navigate = useNavigate();
    const note = location.state;

    const [formData, setFormData] = useState({
        title: note.title,
        image: note.image,
        description: note.description,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:3100/edit/${note._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        navigate('/');
    };

    return (
        <div className="px-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="title" className="form-label" style={{ fontSize: '3rem' }}>Title</label>
                    <input
                        type="text"
                        className="form-control border border-dark border-3"
                        name="title"
                        placeholder="Enter Title"
                        style={{ fontSize: '1.25rem' }}
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="image" className="form-label" style={{ fontSize: '3rem' }}>Picture</label>
                    <input
                        type="text"
                        className="form-control border border-dark border-3"
                        name="image"
                        placeholder="Enter Picture URL"
                        style={{ fontSize: '1.25rem' }}
                        value={formData.image}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label" style={{ fontSize: '3rem' }}>Description</label>
                    <textarea
                        className="form-control border border-dark border-3"
                        name="description"
                        placeholder="Enter Description"
                        style={{ fontSize: '1.25rem', height: '10rem' }}
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="text-center">
                    <button type="button" className="btn btn-secondary rounded-3 py-2 px-3 mx-5" onClick={() => navigate(-1)}>
                        <p className="h5"><i className="fa-solid fa-backward"></i> Back</p>
                    </button>
                    <button type="submit" className="btn btn-success rounded-3 py-2 px-3 mx-5">
                        <p className="h5"><i className="fa-solid fa-upload"></i> Submit</p>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Edit;
