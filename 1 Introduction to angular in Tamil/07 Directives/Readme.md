# Directives

Directives are markers on a DOM element that tell AngularJS's HTML compiler ($compile) to attached a specified behavior to that DOM element or even to transform the DOM element and its children.

- Creating a customized element called directives
- Create directive syntax.
- app.directive('',function(){});
	- directive name then call back function.
		- directive name always **smallCamelCase**
		- callback function always return some value.
		- That return value always **key=>value** pairs.

### What is the use of restrict in Angular directives ?

- Restrict we can mention for which type we use the directive
	- A (Attribute)
	- E (Element)
	- C (Class)
	- M (Comment)

- In template we can return using functions.

- Template functions can accept two parameters
	- element
	- attribute

- We can pass the attribute value as parameter

				<channel-logo class="img-rounded"></channel-logo>
				<channel-logo class="img-circle"></channel-logo>
				<channel-logo class="img-thumbnail"></channel-logo>

        template: function(element,attribute) {
            console.log('element', element);
            console.log('attribute', attribute);
            return "<img class='"+ attribute.class +"' src='images/flag.png'/>"
        }