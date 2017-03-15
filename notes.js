console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding note', title, body);
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
