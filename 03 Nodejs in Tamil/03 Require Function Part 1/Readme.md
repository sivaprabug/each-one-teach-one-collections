# 03 Node JS in Tamil - 03 Require Function Part 1

- This chapter we looking the requirejs
- Divide the project by module module (Segment by Segment)
- Some default modules used in Nodejs
- We can using requirejs only include that modules
- List of api's [refer here](https://nodejs.org/api/)

#### File System
create and append file using **appendFile()**

```javascript
const fs = require('fs');
const os = require('os');

var user = os.userInfo();
console.log(user.username)

fs.appendFile('message.txt',`Hi ${user.username}`);	
```

#### Operating System


get the user details **os.userInfo()**
```javascript
var user = os.userInfo();
console.log(user.username)
```