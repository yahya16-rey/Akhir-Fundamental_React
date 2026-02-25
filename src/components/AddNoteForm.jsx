import { useState } from "react";

function AddNoteForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    function submitHandler(e) {
        e.preventDefault();

        if (!title.trim() || !body.trim()) return;

        onAdd({
            title: title.trim(),
            body: body.trim(),
        });

        setTitle("");
        setBody("");
    }

   return (
        <form
            onSubmit={submitHandler}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 mb-8"
        >
            <h2 className="text-lg font-semibold mb-4">Add Note</h2>

            <div className="flex flex-col gap-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Write something..."
                required
                rows="4"
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                type="submit"
                className="self-start px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
                Add Note
            </button>
            </div>
        </form>
    );
}

export default AddNoteForm;
