import { Link } from "react-router-dom";

function NoteItem({ note, onDelete }) {
    return (
        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
            {/* TITLE WAJIB ADA LINK */}
            <Link to={`/notes/${note.id}`}>
                <h3 className="font-semibold text-lg mb-1 hover:underline cursor-pointer">
                    {note.title}
                </h3>
            </Link>

            {/* CREATED AT WAJIB DITAMPILKAN */}
            <p className="text-sm text-gray-500 mb-2">
                {new Date(note.createdAt).toLocaleString()}
            </p>

            {/* BODY WAJIB DITAMPILKAN */}
            <p className="mb-4">{note.body}</p>

            <button
                onClick={() => onDelete(note.id)}
                className="px-4 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
                Delete
            </button>
        </div>
    );
}

export default NoteItem;
