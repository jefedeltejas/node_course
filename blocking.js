var getUserSync = require('./getUserSync');

console.log('starting user1');
var user1 = getUserSync('123');
console.log('user1', user1);


var user2 = getUserSync('3121');
console.log('user2', user2);

var sum = 1 + 2;
console.log('the sum is ' + sum);
