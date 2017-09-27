# Controllers

### How to create controller ?

app.controller('',[])

- Two Parameters [Controller Name and Array]
	- Controller Nmae is the Name
	- Array is used for callBack functions and dependencies also.

	- Pass the scope value in callBack function.

### What is scope ?

 Scope is a special JavaScript object which plays the role of joining controller with the views.

### Link between Controller to View

- You can call the controller in any element
	    <div align="center"  ng-controller="indexController">

### Link between View  to Controller

	        <form ng-submit="postData()">
            <input type="text" ng-model="userName">
            <input type="submit" value="submit">
        	</form>