const notes = getSavedNotes();


const filters = {
    searchText: ''
}

renderNotes(notes, filters) 

document.querySelector('#create-note').addEventListener('click', function(e) {
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
})

document.querySelector('#search').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    console.log(filters.searchText)
    renderNotes(notes, filters)
})

//Dropdown Event Listener
document.querySelector('#dropdown').addEventListener('change', function(e) {
    console.log(e.target.value)
})
