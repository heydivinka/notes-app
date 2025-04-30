
document.addEventListener("DOMContentLoaded", () => {
    const notesContainer = document.getElementById("notes-container");

    // Load catatan dari localStorage saat halaman dibuka
    loadNotes();

    document.addEventListener("note-added", (event) => {
        const { title, body, category } = event.detail;

        const noteItem = document.createElement("note-item");
        noteItem.setAttribute("title", title);
        noteItem.setAttribute("body", body);
        noteItem.setAttribute("category", category);
        notesContainer.appendChild(noteItem);

        saveNote(title, body, category);
    });
});


// Simpan catatan ke localStorage
function saveNote(title, body, category) {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push({ title, body, category });
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Hapus catatan dari localStorage
function deleteNote(title) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes = notes.filter(note => note.title !== title);
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Muat catatan dari localStorage
function loadNotes() {
    const notesContainer = document.getElementById("notes-container");
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    
    notes.forEach(note => {
        const noteItem = document.createElement("note-item");
        noteItem.setAttribute("title", note.title);
        noteItem.setAttribute("body", note.body);
        noteItem.setAttribute("category", note.category);
        notesContainer.appendChild(noteItem);
    });
}

// text area auto height
const textarea = document.getElementById("autoResizeTextarea");

textarea.addEventListener("input", function () {
  this.style.height = "auto"; // Reset height agar bisa mengevaluasi ulang
  this.style.height = this.scrollHeight + "px"; // Set height berdasarkan content
});