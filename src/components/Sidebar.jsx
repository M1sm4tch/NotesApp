

const Sidebar = (props) => {
    const notesummary = (body)=> (
        body.split("\\n")[0].substr(1)
    )

    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
                <button className="remove-note" onClick={(event) => props.removeNote(event, note.id)}>-</button>
            </div>
        </div>
    ))
    
    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}

export default Sidebar