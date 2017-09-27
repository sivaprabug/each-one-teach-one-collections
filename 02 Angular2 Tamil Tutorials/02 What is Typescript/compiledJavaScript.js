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
