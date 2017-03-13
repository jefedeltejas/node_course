console.log('Starting app.js');

// constants
const fs = require('fs'),
os = require('os'),
notes = require('./notes.js');

//variables
var res = notes.addNote(),
yoMama = notes.yoMama();
console.log('yo Mama adds two nums = ',notes.yoMama(6,9));

// var user = os.userInfo();
//
// fs.appendFile('message.txt', `whatup yall!! this is ya boy, ${user.username} comin atcha from the one and only Twoston, Texas. My fake age is ${notes.age}.`, (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });
