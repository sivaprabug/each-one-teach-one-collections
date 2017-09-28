# 03 Node JS in Tamil - 05 Require Function Final Part

### Require function used for
	- In built node modules
	- External Modules
	- Third party modules

### Third party Modules

- All opensource libraries under ***npm***	
- We can add the packages using ***npm command*** only
- Check the npm version ***npm -v***
- npm init
- package.json created with default parameters
- package.json only for noticed what are the third party tools we used

### Install lodash
- Package is active/Inactive
	- Stable
	- Update
	- No of downloads

- Global installation / local
- ***npm install lodash --save***
- --save parameter used for dependency
- Avoid node_modules (size is high)
-  With package.json install all dependencies

### require flow

```javascript
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
```
- First look out the core Nodejs
- Then look for node_modules folder


### How lodash works
- require the lodash first

```javascript
const _ = require('lodash');

console.log(_.isString('Siva'));
console.log(_.isString(100));

var unFilteredArray = ['siva', 'naveena', '1', 'a', 'siva', 'a'];
console.log(unFilteredArray);

var filteredArray = _.uniq(unFilteredArray);
console.log(filteredArray);
```
- lot of functionalities in lodash verify the [lodash website](https://lodash.com/docs/4.17.4)

- Underscorejs and lodash all same some features missing in underscorejs