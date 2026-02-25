import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { addNote } from "../api/notes-api";
import Navbar from "../components/Navbar";

function NewNotePage() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const { error, message } = await addNote({ title, body });

            if (error) {
                alert(message);
                return;
            }

            navigate("/");
        } catch {
            alert("Gagal menambahkan catatan");
        }
    }

    return (
        <>
            <Navbar />

            <div className="mt-8">
                <Link
                    to="/"
                    className="inline-block mb-6 text-sm text-blue-600 hover:underline"
                >
                    ← Kembali ke Daftar Catatan
                </Link>

                <h2 className="text-2xl font-semibold mb-4">Tambah Catatan</h2>

                <form
  onSubmit={handleSubmit}
  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col gap-4"
>
  <input
    type="text"
    placeholder="Judul"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    required
    className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <textarea
    placeholder="Isi catatan"
    value={body}
    onChange={(e) => setBody(e.target.value)}
    required
    rows="5"
    className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <button
    type="submit"
    className="self-start px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
  >
    Tambah
  </button>
</form>

            </div>
        </>
    );
}

export default NewNotePage;
