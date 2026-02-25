import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} onDelete={onDelete} />
            ))}
        </div>
    );
}

export default NoteList;
