//Read existing Notes from local storage
const getSavedNotes = function () {
  const notesJSON = localStorage.getItem("notes");

  if (notesJSON != null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

//Generate the Notes DOM Structure
const generateNotesDOM = function (note) {
  const noteEl = document.createElement("p");

  if (note.title.length > 0) {
    noteEl.textContent = note.title;
  } else {
    noteEl.textContent = "Unnamed Note";
  }
  return noteEl
};

//Render Notes
const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function (note) {
    const noteEl = generateNotesDOM(note);
    document.querySelector("#notes").appendChild(noteEl);
  });
};