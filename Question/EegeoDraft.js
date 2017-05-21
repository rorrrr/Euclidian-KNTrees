var fs = require('fs');
var math = require('mathjs');
/////////FILE TO PROCESS/////////
var pointCollection = 'problem_small.txt'
/////////////////////////////////

var distanceArray = []

/////////CREATE ARRAY OF STRING/////////
var array = fs.readFileSync(pointCollection).toString().split('\n');
var numberOfPoints = array.length - 1

// array[1][0].split(' ');
// console.log(numberOfPoints)
// console.log(array[1])
// console.log(array[1].split(" ")[1])
// var splitArray = array[0].split()
/////////FOR LOOP TO FIND LONGEST DISTANCE/////////
for (i = 0; i < numberOfPoints-1; i++) {
  var splitArray = (array[i].split(" "))
  var nextArray = (array[i+1].split(" "))
  // var squaredDistanceToNextPoint = (math.pow((parseInt(splitArray[1])) - (parseInt(nextArray[1])), 2)) + (math.pow((parseInt(splitArray[2])) - (parseInt(splitArray[2])), 2))
  var squaredDistanceToNextPoint = math.distance([(parseInt(splitArray[1])),(parseInt(nextArray[1]))], [(parseInt(splitArray[2])), (parseInt(splitArray[2]))])
  // console.log(squaredDistanceToNextPoint)
  distanceArray.push(squaredDistanceToNextPoint)
  var nearestPoint = (distanceArray.sort()[0])
}
///////////////////////////////////////

console.log('nearestPoint', nearestPoint)

///////////indexofsmallest//////////////
// function indexOfSmallest(a) {
//  var lowest = 0;
//  for (var i = 1; i < a.length; i++) {
//   if (a[i] < a[lowest]) lowest = i;
//  }
//  return lowest;
// }
///////////////////////


// console.log(distanceArray.sort())
// math.sqrt(math.pow((x1 - y1), 2) + math.pow((x2 - y2), 2))
