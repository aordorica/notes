const notes = [{
    title: 'my next trip',
    body: 'I would like to go to spain'
}, {
    title: 'Common shortcuts',
    body: 'Command plus other keys'
}, {
    title: 'Names of my cats',
    body: 'Fluffer and Ivy are both of their names'
}, {
    title: 'Grocery list',
    body: 'Lettuce, tomatoes, onions, milk, eggs'
}, {
    title: 'Chores on Day off',
    body: 'Install the new AC, and Replace the foil on the stove'
}];

notes.forEach(function(note) {
    const temp = document.createElement('p')
    temp.textContent = note.title;
    temp.className = 'newNote';
    document.querySelector('body').appendChild(temp);
})

document.querySelector('.add-note').addEventListener('click', function(e) {
    const temp = document.createElement("p");
    temp.textContent = 'New Note';
    temp.className = 'newNote';
    document.querySelector("body").appendChild(temp);
})

document.querySelector('.remove-note').addEventListener('click', function() {
    document.querySelectorAll('.newNote').forEach(function(currentNote) {
        currentNote.remove();
    })
})

document.querySelector('#search').addEventListener('input', function(e) {
    console.log(e.target.value)
})