function getRandomColor() {}

function sendNote() {
  const inputElement = document.getElementById("input");
  const noteContent = inputElement.value;
  inputElement.value = "";

  let newNote = document.createElement("li");
  newNote.innerHTML = noteContent;
  let allNotes = document.getElementById("notes");
  allNotes.appendChild(newNote);
}
