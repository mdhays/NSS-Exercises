var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var criteria = 2;

for (var i = 0; i < planets.length; i++) {
  var planet = planets[i]
  
  switch (planet) {
    case 10:
    case 20:
    case 30:
    case 40:
      console.log("less than 50");
      break;
    case 50:
    case 60:
    case 70:
    case 80:
      console.log("more than 50");
      break;
  }
}