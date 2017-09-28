console.log('Notes Started..');
module.exports.age = 29;
console.log(module);

module.exports.addNote = () => {
    console.log('addNote Called');
    return 'New Note Created';
}

module.exports.add = (a,b) => {
    return a+b;
}
