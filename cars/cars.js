// What is the prototype of a Model?


// Define a Car


// What is the prototype of a Car?


// Create the first car


// Create the second car


// Create the third car





function Car () {
  this.family = "car";
  console.log(this);
}


Car();


var Hyundai = new Car();
Hyundai.property = "sedan";
console.log('Hyundai',Hyundai);


var Honda = new Car();
Honda.property = "coupe";
console.log('Honda', Honda);

var Toyota = new Car();
Toyota.property = "convertible";
console.log('Toyota', Toyota);


function Truck () {
  this.species = "Truck";
}
Truck.prototype = new Car();

var truck = new Truck();
console.log('truck',truck);


function Dodge () {
  this.name = "Dodge";
}
Dodge.prototype = new Truck();

var ram = new Truck();
console.log('ram',ram);