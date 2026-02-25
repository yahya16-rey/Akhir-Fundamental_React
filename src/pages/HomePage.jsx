import { useEffect, useState } from "react";
import { getActiveNotes, deleteNote } from "../api/notes-api";
import Navbar from "../components/Navbar";
import NoteList from "../components/NoteList";
import { Link } from "react-router-dom";

function HomePage() {
    const [notes, setNotes] = useState([]);

    async function fetchNotes() {
        const { data, error } = await getActiveNotes();
        if (!error) {
            setNotes(data);
        }
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    async function handleDelete(id) {
        await deleteNote(id);
        fetchNotes();
    }

    return (
        <>
            <Navbar />

            <h2 className="text-2xl font-semibold mt-6 mb-6">My Notes</h2>

            <Link
                to="/notes/new"
                className="inline-block px-4 py-2 mb-6 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
                + Tambah Catatan
            </Link>

            {notes.length === 0 ? (
                <div className="mt-8 p-6 text-center bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                    <p className="text-gray-500">Tidak ada catatan</p>
                </div>
            ) : (
                <NoteList notes={notes} onDelete={handleDelete} />
            )}
        </>
    );
}

export default HomePage;
