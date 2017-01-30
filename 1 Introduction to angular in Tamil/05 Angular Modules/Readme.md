# 4 Angular Modules

- Collection of
	- Directives
	- Controllers
	- Filters
	- Factories
	- Views
- We can create n number of modules.
- Main module is only one.

### How to create a module ?

angular.module();
angular.module('',[]);

'' => String [] => Array

In array we can call other modules also

angular.module('angularModule',[]);


var app = angular.module('angularModule',[]);
