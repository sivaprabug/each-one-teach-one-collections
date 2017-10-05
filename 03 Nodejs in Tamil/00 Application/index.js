const fs = require("fs");

const _ = require("lodash");
const yargs = require('yargs');

const notes = require("./notes.js");

var argv = yargs.argv;
console.log(argv);
var command = argv._[0];

if (command === "list") {
    notes.listAllNote();
} else if (command === "read") {
    notes.readNote(argv.title);
} else if (command === "create") {
    notes.createNote(argv.title, argv.body);
} else if (command === "remove") {
    notes.removeNote(argv.title);
} else {
    console.log("Command not found");
}
