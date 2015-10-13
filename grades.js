var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
console.log("scores");

var as = []
var bs = []
var cs = []
var ds = []
var fs = []

// var highestGrade = scores[0];
// var lowestGrade = scores[0];

for (var i = 0; i < scores.length; i++) {
 var score = scores[i]

 if (score > 91) {
   as.push(score);
 } else if (score > 81) {
   bs.push(score);
 } else if (score > 71) {
   cs.push(score);
 } else if (score > 61) {
   ds.push(score);
 } else {
   fs.push(score);
 }

 // if (scores[i] > highestGrade) {
 //   highestGrade = scores[i];
 // }
 // if (scores[i] < lowestGrade) {
 //   lowestGrade = scores[i];
 // }
}

console.log("There are " + as.length + " A's");
console.log("There are " + bs.length + " B's");
console.log("There are " + cs.length + " C's");
console.log("There are " + ds.length + " D's");
console.log("There are " + fs.length + " F's");

console.log("The highest grade is: ", Math.max.apply(this, scores));
console.log("The lowest grade is: ", Math.min.apply(this, scores));

// console.log("The highest grade is: ", highestGrade);
// console.log("The lowest grade is: ", lowestGrade);