function getRandomColor() {}

let notes = []

/*function createNote() {
  const inputElement = document.getElementById("input");
  const noteContent = inputElement.value;
  inputElement.value = "";

  let newNote = document.createElement("li");
  newNote.innerHTML = noteContent;
  let allNotes = document.getElementById("notes");
  allNotes.appendChild(newNote);
} */

function createNote() {
  const inputElement = document.getElementById("input");
  const noteContent = inputElement.value;
  inputElement.value = "";

  const newNote = {
    id: notes.length + 1,
    content: noteContent,
  };

  renderNoteToList(newNote);
}

function renderNoteToList(note) {
  const allNotes = document.getElementById("notes");

  const noteElement = document.createElement("li");  //attach the <li> tag onto the element
  noteElement.classList.add("note"); //attach a class name onto the HTML element

  const contentParagraph = document.createElement("p");
  contentParagraph.textContent = note.content;

  const timestampParagraph = document.createElement("p");

  noteElement.appendChild(contentParagraph);

  allNotes.appendChild(noteElement);
}

/*function createNote() {
  const inputElement = document.getElementById("input");
  const noteContent = inputElement.value;
  inputElement.value = "";

  if (noteContent !== '') {
    const newNote = {
      id: notes.length + 1,
      content: noteContent
    };

    notes.push(newNote);
    saveNotesToStorage();
    renderNotes();
  }
}

function renderNotes() {
  const notesContainer = document.getElementById('notesContainer');
  notesContainer.innerHTML = '';

  notes.forEach(note => {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.innerHTML = `
      <span contenteditable="true" class="editable" oninput="updateNoteContent(${note.id}, this.innerText)">${note.content}</span>
      <button onclick="deleteNote(${note.id})" class="delete-btn">X</button>
    `;
    notesContainer.appendChild(noteElement);
  });
}*/
