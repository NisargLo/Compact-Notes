import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Add() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        image: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:3100/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        navigate('/');
    }

    return (
        <>
            <div className="px-5">
                <form onSubmit={handleSubmit}>
                    <div class="mb-5">
                        <label for="formGroupExampleInput" class="form-label" style={{ fontSize: '3rem' }}>Title</label>
                        <input type="text" class="form-control border border-dark border-3" id="formGroupExampleInput" placeholder="Enter Title" style={{ fontSize: '1.25rem' }} name='title' value={formData.title} onChange={handleChange} />
                    </div>
                    <div class="mb-5">
                        <label for="formGroupExampleInput" class="form-label" style={{ fontSize: '3rem' }}>Picture</label>
                        <input type="text" class="form-control border border-dark border-3" id="formGroupExampleInput" placeholder="Enter Picture URL" style={{ fontSize: '1.25rem' }} name='image' value={formData.image} onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label" style={{ fontSize: '3rem' }}>Description</label>
                        <textarea
                            className="form-control border border-dark border-3"
                            id="formGroupExampleInput"
                            placeholder="Enter Description"
                            style={{ fontSize: '1.25rem', height: '10rem' }} name='description' value={formData.description} onChange={handleChange} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-secondary rounded-3 py-2 px-3 mx-5" onClick={() => navigate(-1)}>
                            <p className="h5"><i class="fa-solid fa-backward"></i> Back</p>
                        </button>
                        <button type="submit" className="btn btn-success rounded-3 py-2 px-3 mx-5">
                            <p className="h5"><i class="fa-solid fa-upload"></i> Submit</p>
                        </button>
                    </div>
                </form>
            </div >
        </>
    );
}

export default Add;