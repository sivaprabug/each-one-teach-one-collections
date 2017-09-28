console.log("Each one teach one");
const fs = require('fs');
const os = require('os');

const notes = require('./notes.js')
console.log(notes);

var res = notes.addNote();
console.log(res);

var calc = notes.add(10,20);
console.log(calc);

var user = os.userInfo();
console.log(user.username)


fs.appendFile('message.txt', `Hi ${user.username}, You are ${notes.age}`);