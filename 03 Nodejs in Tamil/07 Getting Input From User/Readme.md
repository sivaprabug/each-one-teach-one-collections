# 03 Node JS in Tamil - 07 Getting Input From User


Using Parameters

 node index.js list
 node index.js read
 node index.js create
 node index.js remove


 node index.js remove --title="Note 1"



```javascript
console.log(process.argv[2]);
console.log(process.argv);

var command = process.argv[2];

if (command === "list") {
    console.log("List all Notes");
} else if (command === "read") {
    console.log("Read Note");
} else if (command === "create") {
    console.log("Note Created");
} else if (command === "remove") {
    console.log("Note Removed");
} else {
    console.log("Command not found");
}
```
