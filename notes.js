console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString =  fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {

};

var addNote = (title, body) => {
  // console.log('Adding note', title, body);
  var notes = fetchNotes;
  var note = {
    title,
    body
  };



  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

var getAll = () => {
  console.log('Getting all of them notes');
};

var getNote = (title) => {
  console.log('Getting that note', title);
};

var removeNote = (title) => {
  console.log('Getting rid of that note.', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};





// module.exports.yoMama = (a, b) => {
//   return a+b;
// };
