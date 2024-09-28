import { useNavigate } from "react-router-dom";

function Edit() {
    const navigate = useNavigate();

    return (
        <>
            <div className="px-5">
                <div class="mb-5">
                    <label for="formGroupExampleInput" class="form-label" style={{ fontSize: '3rem' }}>Title</label>
                    <input type="text" class="form-control border border-dark border-3" id="formGroupExampleInput" placeholder="Enter Title" style={{ fontSize: '1.25rem' }} />
                </div>
                <div class="mb-5">
                    <label for="formGroupExampleInput" class="form-label" style={{ fontSize: '3rem' }}>Picture</label>
                    <input type="text" class="form-control border border-dark border-3" id="formGroupExampleInput" placeholder="Enter Picture URL" style={{ fontSize: '1.25rem' }} />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label" style={{ fontSize: '3rem' }}>Description</label>
                    <textarea
                        className="form-control border border-dark border-3"
                        id="formGroupExampleInput"
                        placeholder="Enter Description"
                        style={{ fontSize: '1.25rem', height: '10rem' }} />
                </div>
                <div className="text-center">
                    <button className="btn btn-secondary rounded-3 py-2 px-3" onClick={() => navigate(-1)}>
                        <p className="h5"><i class="fa-solid fa-backward"></i> Back</p>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Edit;