import { useNavigate } from "react-router-dom";

function Delete({ note, onDelete }) {
    const navigate = useNavigate();

    const handleDelete = async () => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Do you want to delete your note?')) {
            await fetch( `http://localhost:3100/delete/${note._id}`, {
                method: 'DELETE',
            });
            onDelete(note._id);
            navigate('/');
            alert("Your note has been deleted.");
        } else {
            alert("Your note is safe: )");
        }
    };

    return (
        <>
            <button className="btn btn-danger rounded-3 py-2 px-3 me-2" onClick={handleDelete}>
                <p className='h5'><i className="fa-solid fa-trash"></i> Delete</p>
            </button>
        </>
    );
}

export default Delete;
