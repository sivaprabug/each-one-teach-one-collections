console.log("Each one teach one");
const fs = require('fs');
const os = require('os');


var user = os.userInfo();
console.log(user.username)


fs.appendFile('message.txt',`Hi ${user.username}`);