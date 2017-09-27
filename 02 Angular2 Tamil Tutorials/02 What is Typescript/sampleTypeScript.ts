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