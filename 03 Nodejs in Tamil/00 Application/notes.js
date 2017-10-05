var createNote = (title, body) => {
    console.log("Note created", title, body);
}

var listAllNote = () => {
    console.log('List all notes');
}

var readNote = (title) => {
    console.log("Read Note", title);
}

var removeNote = (title) => {
    console.log("Remove note", title);
}

module.exports = {
    createNote : createNote, // key and value same means no need to given both in ES6
    listAllNote,
    readNote,
    removeNote
}