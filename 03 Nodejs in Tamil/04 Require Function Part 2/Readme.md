# 03 Node JS in Tamil - 04 Require Function Part 2

- We can create functionalities in different files
- required all files in main file

```javascript
const notes = require('./notes.js')
```

### Create functionalities and export ad **modules**


```javascript
module.exports.age = 29;
console.log(module);

module.exports.addNote = () => {
    console.log('addNote Called');
    return 'New Note Created';
}

module.exports.add = (a,b) => {
    return a+b;
}

```