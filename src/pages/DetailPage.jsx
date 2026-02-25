import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNoteDetail } from "../api/notes-api";
import Navbar from "../components/Navbar";

function DetailPage() {
    const { id } = useParams();
    const [note, setNote] = useState(null);

    useEffect(() => {
        async function fetchDetail() {
            const { data, error } = await getNoteDetail(id);
            if (!error) {
                setNote(data);
            }
        }

        fetchDetail();
    }, [id]);

    if (!note) return <p className="mt-10 text-center">Loading...</p>;

    return (
        <>
            <Navbar />

            <div className="mt-10 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                <h2 className="text-2xl font-semibold mb-2">{note.title}</h2>

                <p className="text-sm text-gray-500 mb-4">
                    {new Date(note.createdAt).toLocaleString()}
                </p>

                <p>{note.body}</p>
            </div>
        </>
    );
}

export default DetailPage;
