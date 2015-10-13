var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");

/*
  YOUR ASSIGNMENT
  ----------------------------------------
  Loop through all the reindeer in the array, and add the 
  name of the reindeer to the single HTML <div> element provided.
  The name of the reindeer should be prepended with the corresponding
  color from the other array.
  
  For example:
    Blue Dasher
    Red Dancer
    etc..
*/

var output = "";

for (var index = 0; index < reindeer.length; index++) {
  var currentReindeer = reindeer[index];
  var currentColor = colors[index];

  output = output + "<h1 style='color:" + currentColor + "'>";
  output = output + currentColor + " " + currentReindeer;
  output = output + "</h1>";
  console.log(output);
}

console.log(output);

hohohoElement.innerHTML = output;