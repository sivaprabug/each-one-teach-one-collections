console.log("Each one teach one");
const fs = require('fs');
const os = require('os');
const _ = require('lodash');

console.log(_.isString('Siva'));
console.log(_.isString(100));

var unFilteredArray = ['siva', 'naveena', '1', 'a', 'siva', 'a'];
console.log(unFilteredArray);

var filteredArray = _.uniq(unFilteredArray);
console.log(filteredArray);