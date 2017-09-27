# Data Binding

- Two Methods
	- One way data binding
		- Property Data Binding
		- Event Data Binding
	- Two way data binding

## One way data binding


#### Property Data Binding

**Class => View**

```html
<input type="text" [value]="myName" class="form-control" name="name" id="name" placeholder="Enter your Name" />
<strong [innerHTML]="innerHtmlValue"> </strong>
```

```javascript
myName = "My Name Value Dynamic";
innerHtmlValue = "<h7>Hello World !!</h7>";
```


#### Event Data Binding

**View => Class**

```html
<button class="btn btn-primary btn-lg btn-block login-button" (click)="submit()">Register</button>
```

```javascript
  submit(){
    alert('Submitted');
  }
```

## Two way data binding


- Here change happen means in view and class also affected.


```html
<input type="text" class="form-control" name="email" id="email" [(ngModel)]="profile" placeholder="Enter your Email" />{{profile}}

```

```javascript
  profile;

  submit(){
    alert('Submitted');
    this.profile="Value chnage from class"
  }

```