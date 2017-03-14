console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding note', title, body);
};

var getAll = () => {
  console.log('Getting all of them notes');
};

module.exports = {
  addNote,
  getAll
};





// module.exports.yoMama = (a, b) => {
//   return a+b;
// };
