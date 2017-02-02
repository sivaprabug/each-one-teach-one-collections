# Form validation  in Angularjs

- Only for front-end developers only.
- Important  Validations.
	- Number Validation.
	- Email Validation.
	- Password Validation.
	- Password Match.
	- Max length in field.
	- Empty Value
	- Null Value.
	- Form submitted or not.

###Sample Form:-

- Angular always converts form to an Object.
- In angular lot validation concepts are there we check one by one

#### touch and untouched

- **$untouched**
	- ***true*** means the user can't touch the form.
	- ***false*** means the user touch the form.

- **$touched**
	- ***true*** means the user touch the form.
	- ***false*** means the user can't touch the form.

- **dirty** means the user typed the field.
	- ***true*** means the user entered  the field.
	- ***false*** means the user can't entered the field in the form.

- **dirty** means the user typed the field.
	- ***true*** means the user entered  the field.
	- ***false*** means the user can't entered the field in the form.

- **pristine** means noticed the field is fresh or some thing changed
	- ***true*** means the field no change.
	- ***false*** means the something they tried.

- **valid** means check the conditions for the field.
	- ***true*** means field is valid.
	- ***false*** means field is not valid.

- **invalid** means check the conditions for the field.
	- ***true*** means field is not valid.
	- ***false*** means field is valid.

- **ng-maxlength** define length of the field.

- **ng-required** is required field.

- **ng-disabled** is disabled the the button
	- If the fprm is valid then only need to submit the user ***ng-disabled="profileForm.$invalid"***

- **ng-show**	 if the condition true then only show the element.

- **ng-min** Minimum value