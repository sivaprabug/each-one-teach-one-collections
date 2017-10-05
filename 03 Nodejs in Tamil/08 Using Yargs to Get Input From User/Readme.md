# 03 Node JS in Tamil - 08 Using Yargs to Get Input From User

- We need to parse the data manually ising some conditions
- So we go for the package called **Yargs**
- [yargs in npmjs.org](https://www.npmjs.com/package/yargs)
- Install the package ***npm i yargs --save***
- require the **yargs package**

```javascript
const yargs = require('yargs');
```

Get the command parameter from ***yargs***

```javascript
var command = argv._[0];
```


#### Create the functionality

```javascript
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

```

#### Export functions
***key and value same means no need to given both in ES6***



```js
var createNote = (title, body) => {
    console.log("Note created", title, body);
}

var listAllNote = () => {
    console.log('List all notes');
}

var readNote = (title) => {
    console.log("Read Note", title);
}

var removeNote = (title) => {
    console.log("Remove note", title);
}

module.exports = {
    createNote : createNote, // key and value same means no need to given both in ES6
    listAllNote,
    readNote,
    removeNote
}
```





# Property value shorthand [object destructuring](http://www.benmvp.com/learning-es6-destructuring/#object-destructuring)

The new property value shorthand lets us abbreviate the initialization of a property within an object literal, provided that the property key matches an existing variable name. This was the first part of the ES6 code above:

```js
function getCar(make, model, value) {
	return {
		// with property value shorthand
		// syntax, you can omit the property
		// value if key matches variable
		// name
		make,
		model,
		value
	};
}
```
The ES3/ES5 equivalent would be:
```js
function getCar(make, model, value) {
	return {
		make: make,
		model: model,
		value: value
	};
}
```

As you can see, the ES6 syntax is a bit more succinct by being less repetitive with the removal of the colon (:) and the matching variable. Declaring an object literal with keys that match variables is actual quite common, so you should find this feature quite useful. You may also notice that this property value shorthand looks remarkably like the object literal destructure pattern shorthand when we discussed [object destructuring](http://www.benmvp.com/learning-es6-destructuring/#object-destructuring)

With this shorthand syntax, the JS engine looks in the containing scope for a variable with the same name. If it is found, that variable’s value is assigned to the property. If it is not found, a ReferenceError is thrown. It’s worth noting that the transpilers will not throw an error at compile time if the variable is not found, but instead will declare an object with the name of the not-found variable. However, when the code runs you will still get the ReferenceError since the variable does not exist.