var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
console.log ("band value", bands[0]);

// The number of loops to perform (what if the array changes?)
var loopCount = 5;
console.log ("loops");
// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
console.log("Current value ", loopTracker)

currentVeggie = currentVeggie + "<p>";
currentVeggie = currentVeggie + vegetables[loopTracker];
currentVeggie = currentVeggie + "</p>";
currentBand = currentBand  + "<p>";
currentBand = currentBand + bands[loopTracker];
currentBand = currentBand  + "</p>";


}

console.log("Current value ", currentVeggie)
console.log("Current value ", currentBand)


  // Add the band names into the correct <div>

  bandElement.innerHTML = currentBand;
  veggieElement.innerHTML = currentVeggie;
  
