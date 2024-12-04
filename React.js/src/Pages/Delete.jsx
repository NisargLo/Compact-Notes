import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Delete({ note, onDelete }) {
    const navigate = useNavigate();

    const handleDelete = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to delete your note?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        });

        if (result.isConfirmed) {
            await fetch(`http://localhost:3100/delete/${note._id}`, {
                method: 'DELETE',
            });
            onDelete(note._id);
            Swal.fire(
                'Deleted!',
                'Your note has been deleted.',
                'success'
            );
            navigate('/');
        } else {
            Swal.fire(
                'Cancelled',
                'Your note is safe :)',
                'info'
            );
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
