  # 02 What is Typescript

  - Angular 2 is JS frame work but we written in TypeScript
  - Compiler in **C**
  - [Transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler) transpile TypeScript programs in to JavaScript.

  ### TypeScript

  ```javascript
  // Declaring Class
  class Car {
      defaultColor: string = "red";
      //Declaring Constructor
      constructor() {
          this.createCar()
      }
      createCar() {
          console.log("Car created with default color : " + this.defaultColor)
      }
  }

  // Load the class
  let myCar = new Car();

  ```
  ### Transpile TypeScript =>  JavaScript

  ```javascript
  var Car = (function () {
      function Car() {
          this.defaultColor = "red";
          this.createCar();
      }
      Car.prototype.createCar = function () {
          console.log("Car created with default color : " + this.defaultColor);
      };
      return Car;
  }());
  var myCar = new Car();
  ```

  ### Why Transpiler

  - Current JavaScript Version is ES5
  - JavaScript Standard maintained by ECMA
  -  Compile ES6 to ES5.. any