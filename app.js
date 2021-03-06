// console.log('Starting app.js');

// constants
const fs = require('fs'),
os = require('os'),
_ = require('lodash'),
yargs = require('yargs'),
titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
},
bodyOptions = {
  describe: 'Content of note',
  demand: true,
  alias: 'b'
},
argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Pesky note removed', {
      title: titleOptions
  })
  .help()
  .argv,
notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString("Bossman"));


var command = argv._[0];
// console.log('Command: ', command);
// console.log('Process',process.argv);
// console.log('Yargs', argv);

if(command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title ardy taken. Pick another.');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else if (command === 'stank') {
  console.log('Ewwww, stanky');
} else {
  console.log('PC loadletter paperjam');
}


//variables
// var res = notes.addNote(),
// yoMama = notes.yoMama();
// console.log('yo Mama adds two nums = ',notes.yoMama(6,9));

// var filteredArray = _.uniq(['Drake', 1, 2, 37, 69])
// console.log(filteredArray);

// var user = os.userInfo();
//
// fs.appendFile('message.txt', `whatup yall!! this is ya boy, ${user.username} comin atcha from the one and only Twoston, Texas. My fake age is ${notes.age}.`, (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });
