function getRandomColor() {}

function sendNote() {
  let newNote = document.createElement("li");
  newNote.innerHTML = "Hi";
  let allNotes = document.getElementById("notes");
  allNotes.appendChild(newNote);
}
